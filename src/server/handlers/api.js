var defaultHandler = function(request, response) {
  response.json( { response: 'OK' } );
};

module.exports = {
  getDefaults   : defaultHandler,
  putDefaults   : defaultHandler,
  getTunnels    : defaultHandler,
  putTunnels    : defaultHandler,
  postTunnels   : defaultHandler,
  getTunnelName : defaultHandler,
  putTunnelName : defaultHandler,
  delTunnelName : defaultHandler,
  postTunnelName: defaultHandler
};
