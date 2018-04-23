const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 8080;
const version = require('../package.json').version;
const publicPath = path.join(__dirname, '../public');
const db = path.join(__dirname, '../fakeDB.json');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath))

server.listen(port, () => {
  console.log(`Started V${version} on port ${port}`);
});