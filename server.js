var http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    var json = JSON.stringify(
      {playerone: 5, playertwo: 6, playerthree: 7, playerfour: 8 }
   );
  res.end(json);
  console.log(req);
}).listen(8010);