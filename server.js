var http = require('http');

/*http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    var json = JSON.stringify(
      {playerone: 5, playertwo: 6, playerthree: 7, playerfour: 8 }
   );
  res.end(json);
  console.log(req);
}).listen(8010);*/

var scores = {player1: 5, player2: 6, player3: 7, player4: 8 };


var updateScores = function(object){
    
      scores.player1 = object.player1;  
      scores.player2 = object.player2;  
      scores.player3 = object.player3;  
      scores.player4 = object.player4;  
}

http.createServer(function (req, res) {
    
    if (req.method == "POST") {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("JSON object: " + body);
            var object = JSON.parse(body);
            updateScores(object);    
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    
     if (req.method == "GET") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify(
        scores
        );
        res.end(json);
    }
    
}).listen(8010);