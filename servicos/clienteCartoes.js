var restify = require('restify');

function CartoesClient(){
  this._cliente = restify.createJsonClient({
    url:'http://172.17.0.6:3001'
  });
}

CartoesClient.prototype.autoriza = function(cartao, callback){
  this._cliente.post('/cartoes/autoriza', cartao , callback);
}

module.exports = function(){
  return CartoesClient;
}
