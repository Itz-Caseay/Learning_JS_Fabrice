const express = require('express');
const http = require('http');
const { Server } = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (Socket) => {
    console.log('new user connected');
    Socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    Socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});