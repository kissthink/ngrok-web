'use strict';


module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    defaults: {
      server: {
        directory: "src/server/"                
      },
      client: {
        directory: "src/client/"
      }
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('default', function() {
    console.log('Nothing here yet');
  });

  require('load-grunt-tasks')(grunt);

};
