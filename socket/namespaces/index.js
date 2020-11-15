const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const host = '127.0.0.1';
const port = 7001;

const usersNamespace = io.of('/users');
const ordersNameSpace = io.of('/orders');

usersNamespace.on('connection', (socket) => {
    console.log(`Client ${socket.id} connected to /users`);

    socket.on('message', (msg) => {
        console.log(`Message from the client: ${msg}`);
    });

    socket.emit('message', 'Message to the room /users');

    socket.on('disconnect', () => {
        console.log(`Client with id ${socket.id} disconnected`)
    })
});

ordersNameSpace.on('connection', (socket) => {
    console.log(
        `Client ${socket.id} connected to /orders`
    )

    socket.on('disconnect', () => {
        console.log(`Client with id ${socket.id} disconnected`)
    })
});

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile('index.html'))

server.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);