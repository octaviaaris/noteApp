// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/html');
	
// 	var url = req.url;
// 	if(url === '/about') {
// 		res.end('about page');
// 	} else {
// 		res.end('<h1>index.html<h1>');
// 	}
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

var express = require('express');
var app = express();
// var path = require('path');

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname + '/index.html'));
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});