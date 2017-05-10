var http = require("http");

const appId = 730;
const steamId = 76561198237693572;
const key = 'D3AB52863B9F0893D06D2C5777624008';
const apiVersion = 'v0002';

module.exports = function(){
        this.getUserStatsForGame = function(cb){
                http.get(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/${apiVersion}?appid=${appId}&steamid=${steamId}&key=${key}`,
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
