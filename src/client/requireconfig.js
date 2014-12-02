require.config({
  'baseUrl': '/bower_components',
  'paths': {
    'jquery': 'jquery/dist/jquery.min',
    'underscore': 'underscore/underscore.min',
    'backbone': 'backbone/backbone',
    'react': 'react/react.min',
    'react-bootstrap': 'react-bootstrap/react-bootstrap.min'
  },
  'shim': {
    'backbone': {
      'deps': [
        'jquery',
        'underscore'
      ],
      'exports': 'Backbone'
    },
    'jquery': {
      'exports': '$'
    },
    'underscore': {
      'exports': '_'
    }
  }
});
