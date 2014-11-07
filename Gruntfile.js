module.exports = function(grunt) {
  
  
  // Config
  grunt.initConfig({
    mustache_render: {
      all: {
        files: [{
          data: "components/pages/index.json",
          template: "components/pages/index.mustache",
          dest: "public/index.html"
        }]
      }
    }
  });
  
  
  // Plugins
  grunt.loadNpmTasks('grunt-mustache-render');
  

  // Tasks
  grunt.registerTask('default', ['mustache_render']);
};