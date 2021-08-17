const http = require('http');
const JSONServer = require('@discovery-solutions/json-server');

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

const servers = new JSONServer.startServers({
  database: {
    url: "mongodb+srv://adm:ademir@cluster0.melvy.mongodb.net/Cluster0?retryWrites=true&w=majority",
    name: "Cluster0",
    type: "mongo"
  }
});

server.listen(port, host, () => {
  console.log(`O servidor está rodando em http://${host}:${port}`);
});