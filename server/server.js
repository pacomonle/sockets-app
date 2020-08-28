const express = require('express');
// cargar lobreria sockets
const socketIO = require('socket.io')
// servidor de node compatible con socket
//const http = require('http')
// si trabaja mos desde heroku
const http = require('https')

const path = require('path');

const app = express();
const server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// para mantener la conexion directa con el servidor - backend
module.exports.io  = socketIO(server)
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});