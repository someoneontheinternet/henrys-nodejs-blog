var http = require('http');
var process = require('process');

const PORT = process.env.PORT || 3000;

function handleRequest(request, response){
  response.writeHead(301, {
    Location: "http://24.87.153.133:60000"
  });
  response.end();
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log(PORT);
});
