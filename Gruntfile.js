module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var config = grunt.file.readYAML('Gruntconfig.yml')
  grunt.initConfig({
    // Minify Resousces using uglify
    cssmin: {
      sourceCSS: {
        files: [{
          expand: true,
          cwd: config.cssDir,
          src: ['*.css', '!*.min.css'],
          dest: config.mincssDir,
          ext: '.min.css'
        }]
      },
      viewCSS: {
        files: [{
          expand: true,
          cwd: config.cssViewDir,
          src: ['*.css', '!*.min.css'],
          dest: config.mincssViewDir,
          ext: '.min.css'
        }]
      }
    },

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







  });


  grunt.registerTask('default', [
    'cssmin',
    'htmlmin',
    'uglify',

  ]);

};
