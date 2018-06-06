var http = require('http'),
    fs = require('fs');


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);

}).listen(3000);
	
