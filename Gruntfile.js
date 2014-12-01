'use strict';


module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),

    defaults: { /* defaults: start */
      server: {
        directory: 'src/server/'
      },
      client: {
        directory: 'src/client/'
      },
      build: {
        directory: 'dist/'
      }
    }, /* defaults: end */

    mochaTest: { /* mochaTest: start */
      server: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true
        },
        src: ['test/server/*-test.js']
      }
    }, /* mochaTest: end*/

    eslint: { /* eslint: start */
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
    }, /* eslint: end */

    mkdir: {
      options: {
        create: ['<%= defaults.build.directory %>']
      }
    }
  };

  grunt.initConfig(config);

  grunt.registerTask('default', function() {
    console.log('Nothing here yet');
  });

  grunt.registerTask('build',['mkdir']);
  grunt.registerTask('test',['build','eslint','mochaTest:server']);

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

};
