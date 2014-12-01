var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var apiRouter = require('./routes/api');

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use( '/api', apiRouter );
app.use( '/', express.static(path.join(__dirname, '../../dist/')));
app.use( '/bower_components', express.static(path.join(__dirname, '../../bower_components/')));


module.exports = app;
