const express = require('express');
const socketIO = require('socket.io');
const htpp = require('http');

const path = require('path');

const app = express();
const server = htpp.createServer(app); //Creación del server a usar

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//io = es la comunicación del backend
module.exports.io = socketIO(server); //Inicialización del server
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});