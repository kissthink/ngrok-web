var express = require('express');    
var app = express();
var bodyParser = require('body-parser');

// setup body parser to handle POST requests 
// not sure if needed yet - GET, PUT & DELETE might be enough.

app.use( bodyParser.urlencoded({ extended: true }) );

app.use( bodyParser.json() );


var port = process.env.PORT || 8080;  // TODO: read from config file 


var router = express.Router(); 

router.use(function(request, response, next) {
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'ACK' }); 
});



router.route('/defaults')
  .get(function(request, response) {
    response.json({ api: "GET /defaults"});
  })
  .put(function(request, response) {
    response.json({ api: "PUT /defaults"});
  });
  

router.route('/tunnels')
  .get(function(request, response) {
    response.json({ api: "GET /tunnels"});
  })
  .put(function(request, response) {
    response.json({ api: "PUT /tunnels"});
  })
  .post(function(request, response) {
    response.json({ api: "POST /tunnels"});
  });

router.route('/tunnel/:tunnelname')
  .get(function(request, response) {
    response.json({ api: "GET /tunnel"});
  })
  .put(function(request, response) {
    response.json({ api: "PUT /tunnel"});
  })
  .delete(function(request, response) {
    response.json({ api: "DELETE /tunnel"});
  })
  .post(function(request, response) {
    response.json({ api: "POST /tunnel"});
  });



app.use('/api', router);

app.listen(port);
console.log('Listening on ' + port);
