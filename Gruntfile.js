

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
        compile: {
          options: {
            almond: true,
            baseUrl: "public/js",
            mainConfigFile: "public/main.js",
            out: "build/optimized.js"
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.registerTask('build', 'requirejs');

};