console.log("Starting app... __dirname:", __dirname);

var http = require('http');
var steamApiClass = require("./libs/steamApi");
var steamApi = new steamApiClass();


var cb = function(req, res){
	// console.log(req.headers);

	var send = function(str){
      // console.log("Nuevo pedido: ", req.url);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(str+'\n');
    };

	steamApi.getUserStatsForGame(send);

}

http.createServer(cb).listen(3000);
//video 8 min 0