var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var apiRouter = require('./routes/api');
var jsxCompile = require('express-jsx');

var rootPath = path.join(__dirname, '../../dist/');
var bowerComponents = path.join(__dirname, '../../bower_components/');

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use( '/api', apiRouter );
app.use( jsxCompile(rootPath) );
app.use( '/', express.static(rootPath));
app.use( '/bower_components', express.static(bowerComponents));


module.exports = app;
