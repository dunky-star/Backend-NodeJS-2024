const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first NodeJS server</title></head>');
  res.write('</head>');
  res.write('<body>');
  res.write('<p>Hello from my NodeJS server!</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
