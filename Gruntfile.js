'use strict';


module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    defaults: {
      server: {
        directory: 'src/server/'
      },
      client: {
        directory: 'src/client/'
      }
    },
    mochaTest: {
      server: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true
        },
        src: ['test/server/*-test.js']
      }
    },
    eslint: {
      options: {
        config: 'config/eslint.json'
      },
      target: [
        'Gruntfile.js',
        'src/server/**.js',
        'test/server/*.js',
        'src/client/**.js',
        'test/client/*.js'
      ]
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('default', function() {
    console.log('Nothing here yet');
  });

  grunt.registerTask('test',['eslint','mochaTest:server']);

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

};
