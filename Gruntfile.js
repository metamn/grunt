'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    
    // HTML
    // Generate HTML files from Handlebars templates
    assemble: {
      // Task-level options
      options: {
        assets: 'assets',
        partials: ['components/**/*.hbs']
      },
      // Target-level options
      site: {
        files: [{ 
          expand: true, 
          cwd: 'components/pages/', 
          src: ['**/*.hbs'], 
          dest: 'public' 
        }]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      all: ['public/**/*']
    },
    
    watch: {
      html: {
        files: ['components/**/*.hbs'],
        tasks: 'html'
      }
    },  
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('grunt-newer' );
  
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
  
  // All other tasks
  grunt.registerTask('html', ['assemble']);
};


