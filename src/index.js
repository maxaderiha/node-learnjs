import { Server } from 'http';

const server = new Server();

server.on('request', (req, res) => {
  res.end('Hello, NodeJS');
});

server.listen(3000);