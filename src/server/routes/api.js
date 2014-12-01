var express = require('express');
var router = express.Router();  
var apiHandlers  = require('../handlers/api');

router.use(function(request, response, next) {
  next();
});

router.route("/")
  .get(apiHandlers.getDefaults)

router.route('/defaults')
  .get(apiHandlers.getDefaults)
  .put(apiHandlers.putDefaults)

router.route('/tunnels')
  .get(apiHandlers.getTunnels)
  .put(apiHandlers.putTunnels)
  .post(apiHandlers.postTunnels)

router.route('/tunnel/:tunnelName')
  .get(apiHandlers.getTunnelName)
  .put(apiHandlers.putTunnelName)
  .delete(apiHandlers.delTunnelName)
  .post(apiHandlers.postTunnelName)


module.exports = router
