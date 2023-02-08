const http = require('http');
const { config } = require('process');
const app = require('./app');

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(config.port);