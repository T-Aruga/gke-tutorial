const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  console.log('アクセスがあったよ');
}).listen(3000, () => console.log('Server http://localhost:3000'));
