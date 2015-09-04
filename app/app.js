
(function (angular) {
  var app = angular.module('myApp',[
    'ui.router',
    'ngMessages'
  ]);


  app.controller('MainCtrl',['$scope',function ($scope) {
    $scope.numbers = [0,1,2];

    $scope.format = "hh:mm:ss a";
  }]);

  app.controller('FormCtrl',['$scope',function ($scope) {
    $scope.submit = function (data) {
      console.log(data);
    };
  }]);


  app.directive('commentBox', function(){

    return {
      restrict:'E',
      templateUrl:'app/views/commentbox-tpl.html'
    }

  });

  app.directive('currentTime',['$interval','dateFilter',function($interval, dateFilter){
    return {
      link:function ($scope,element,attrs) {
        var format, timeoutId;

        function updateTime () {
          element.text(dateFilter(new Date(), format));
        }

        // Watch for changes in date format
        $scope.$watch(attrs.currentTime, function(value) {
          format = value;
          updateTime();
        });

        // Cancel interval when element is destroyed
        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);
      }
    };
  }]);

  app.directive('sayMyName',function () {

    return {
      restrict:'E',
      scope:{
        person:"="
      },
      template:"<p class='container'> My name is {{person.name}} !</p>"
    };

  });


  app.directive('beginsWithCapital',function () {

    return {
      require:'ngModel',
      link:function($scope, element, attrs, ctrl){
        ctrl.$parsers.push(function (value) {
          var regex = /^[A-Z]/;
          var success = regex.test(value);
          ctrl.$setValidity('firstLetterCapital', success);
          return value;
        });
      }

    };

  });

  app.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
});


})(angular);
