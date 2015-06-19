module.exports = function (grunt) {

    /*Configuration*/
    grunt.initConfig({

        /* Load npm's Configuration */
        pkg: grunt.file.readJSON('./package.json'),

        /* BowerCopy Configuration */
        bowercopy: {
          js: {
            options: {
              destPrefix: 'assets/js/vendor'
            },
            /* Keys are destinations while values are the source of the files*/
            files: {
              'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
              'angular/angular.min.js': 'angular/angular.min.js',
              'angular/angular-ui-router.min.js': 'ui-router/release/angular-ui-router.min.js',
              'bootstrap/bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js'
            }
          },

          css:{
            options:{
              destPrefix:'assets/css/vendor'
            },

            files:{
              'bootstrap/bootstrap.min.css':'bootstrap/dist/css/bootstrap.min.css',
              'bootstrap/bootstrap.css.map':'bootstrap/dist/css/bootstrap.css.map',
              'bootstrap/bootstrap-theme.min.css':'bootstrap/dist/css/bootstrap-theme.min.css',
              'bootstrap/bootstrap-theme.css.map':'bootstrap/dist/css/bootstrap-theme.css.map',
              'bootstrap/fonts/glyphicons-halflings-regular.eot':'bootstrap/fonts/glyphicons-halflings-regular.eot',
              'bootstrap/fonts/glyphicons-halflings-regular.svg':'bootstrap/fonts/glyphicons-halflings-regular.svg',
              'bootstrap/fonts/glyphicons-halflings-regular.ttf':'bootstrap/fonts/glyphicons-halflings-regular.ttf',
              'bootstrap/fonts/glyphicons-halflings-regular.woff':'bootstrap/fonts/glyphicons-halflings-regular.woff',
              'bootstrap/fonts/glyphicons-halflings-regular.woff2':'bootstrap/fonts/glyphicons-halflings-regular.woff2',


              'font-awesome/font-awesome.min.css':'font-awesome/css/font-awesome.min.css',
              'font-awesome/font-awesome.css.map':'font-awesome/css/font-awesome.css.map',
              'font-awesome/fonts/fontawesome-webfont.eot':'font-awesome/fonts/fontawesome-webfont.eot',
              'font-awesome/fonts/fontawesome-webfont.svg':'font-awesome/fonts/fontawesome-webfont.svg',
              'font-awesome/fonts/fontawesome-webfont.ttf':'font-awesome/fonts/fontawesome-webfont.ttf',
              'font-awesome/fonts/fontawesome-webfont.woff':'font-awesome/fonts/fontawesome-webfont.woff',
              'font-awesome/fonts/fontawesome-webfont.woff2':'font-awesome/fonts/fontawesome-webfont.woff2',
              'font-awesome/fonts/FontAwesome.otf':'font-awesome/fonts/FontAwesome.otf'
            }
          }
        },
        /* End BowerCopy Configuration */

        /* Grunt Clean Configuration*/
        clean: {
          bower_components: {
            src: [ 'bower_components' ]
          },
        }

    });


    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-concat');




    /**
     * REGISTER TASKS*/
    grunt.registerTask("build", ['bowercopy','clean']);
};
