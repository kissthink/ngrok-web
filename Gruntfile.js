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
    },
    mochaTest: {
      server: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true
        },
        src:  ['test/server/*-test.js']
      }
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('default', function() {
    console.log('Nothing here yet');
  });

  grunt.registerTask('test',['mochaTest:server']);

  require('load-grunt-tasks')(grunt);

};
