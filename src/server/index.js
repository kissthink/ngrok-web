var server = require('./server');

var port = process.env.PORT || 8080;  // TODO: read from config file
server.listen(port);
console.log('Listening on ' + port);
