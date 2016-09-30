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

var state = {
    player1selected : false,
    player2selected : false,
    player3selected : false,
    player4selected : false,
    player1: 1500, 
    player2: 1500, 
    player3: 1500, 
    player4: 1500 };


var updateState = function(object){
      
      if(object.selectedplayer == 1){
          state.player1selected = true;
          state.player1 = object.player1;  
      };
      if(object.selectedplayer == 2){
          state.player2selected = true;
          state.player2 = object.player2;
      };
      if(object.selectedplayer == 3){
          state.player3selected = true;
          state.player3 = object.player3; 
      };
      if(object.selectedplayer == 4){
          state.player4selected = true;
          state.player4 = object.player4; 
      }; 
}

http.createServer(function (req, res) {
    
    if (req.method == "POST") {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("JSON object: " + body);
            var object = JSON.parse(body);
            updateState(object);    
        });
        req.on('end', function () {
            
        });
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    
     if (req.method == "GET") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify(state);
        res.end(json);
    }
    
}).listen(8010);