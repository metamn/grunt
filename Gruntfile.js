
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assemble: {
      // Task-level options
      options: {
        assets: 'assets'
      },
      site: {
        // Target-level options
        files: [ { 
          expand: true, 
          cwd: 'components/pages/', 
          src: ['**/*.hbs'], 
          dest: 'public' }
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      all: ['public/**/*.{html}']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('grunt-newer' );

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'newer:assemble']);
};


