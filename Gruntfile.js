module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
        compile: {
          options: {
            almond:true,
            baseUrl: "public/js/vendor",
            mainConfigFile: "public/js/main.js",
            name: '../main',
            findNestedDependencies: true,
            generateSourceMaps: false,
            optimize:"none",
            wrap: true,
            out: "public/build/build.js"
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.registerTask('build', 'requirejs');
};