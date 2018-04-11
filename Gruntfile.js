
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var config = grunt.file.readYAML('Gruntconfig.yml')
  grunt.initConfig({
    // Minify CSS
    cssmin: {
      sourceCSS: {
        files: [{
          expand: true,
          cwd: config.cssDir,
          src: ['*.css', '!*.min.css'],
          dest: config.mincssDir,
          ext: '.css'
        }]
      },
      viewCSS: {
        files: [{
          expand: true,
          cwd: config.cssViewDir,
          src: ['*.css', '!*.min.css'],
          dest: config.mincssViewDir,
          ext: '.css'
        }]
      }
    },
    // Minify html
    htmlmin: {                                     // Task
      html: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: config.srcDir,
          src: ['*.html'],
          dest: config.distDir
        }]
      },
      viewHtml: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: config.srcViewDir,
          src: ['*.html'],
          dest: config.distViewDir
        }]
      },
    },
    // Minify JS
    uglify: {
      sourceJS: {
        files: [{
          expand: true,
          cwd: config.jsDir,
          src: ['*.js'],
          dest: config.minjsDir,
        }]
      },
      viewJS: {
        files: [{
          expand:true,
          cwd: config.jsViewDir,
          src: ['*.js'],
          dest: config.minjsViewDir,
        }]
      },

    },
    copy: {
      target: {
        files: [{
          expand: true,
          cwd: config.imgDir,
          src: '*.{gif,jpg,png}',
          dest: config.imgDestDir
        },
        {
          expand: true,
          cwd: config.imgViewDir,
          src: '*.{gif,jpg,png}',
          dest: config.imgDestViewDir
        }]
      }
    },
    inlinecss: {
        main: {
            options: {
            },
            files: {
              'dist/index.html':'dist/index.html'
            }
        }
    }

  });


  grunt.registerTask('default', [
    'cssmin',
    'htmlmin',
    'uglify',
    'copy',
    'inlinecss'
  ]);

};
