console.log("Starting app... __dirname:", __dirname);

var steamApi = require("./libs/steamApi");
// var steamApi = new steamApiClass();
steamApi("lala", function(p){
	console.log(p)
});