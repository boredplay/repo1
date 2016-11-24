console.log("Starting app... __dirname:", __dirname);

var steamApiClass = require("./libs/steamApi");
var steamApi = new steamApiClass();



steamApi.getUserStatsForGame(function(p){console.log(p)});