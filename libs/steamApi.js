var http = require("http");
module.exports = function(){
        this.getUserStatsForGame = function(cb){
                http.get("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002?appid=730&steamid=76561198237693572&key=D3AB52863B9F0893D06D2C5777624008", 
                function(req){
                        body = "";
                        req.on("data", function(d){
                                body = body+d.toString();
                        });

                        req.on("end", function(){
                                // var json = JSON.parse(body);
                                cb(body);
                        });
                });
        }
};