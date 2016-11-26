console.log("Starting app... __dirname:", __dirname);

var http = require('http');
var steamApiClass = require("./libs/steamApi");
var steamApi = new steamApiClass();

http.createServer(function(req, res){
	console.log(steamApi);
}).listen(3000);
// steamApi.getUserStatsForGame(function(p){console.log(p)});
//video6 51min

