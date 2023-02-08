const http = require('http');
const config = require('./api/config/config');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);