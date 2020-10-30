const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const host = '127.0.0.1';
const port = 7001;

const nmspc1 = io.of('/users');
const nmspc2 = io.of('/orders');

nmspc1.on('connection', (socket) => {
    console.log(`Client ${socket.id} connected to /users`);

    socket.on('message', (msg) => {
        console.log(`Message from the client: ${msg}`);
    });

    socket.emit('message', 'Message to the room /users');
});

nmspc2.on('connection', (socket) => {
    console.log(
        `Client ${socket.id} connected to /orders`
    )
});

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile('index.html'))

server.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);