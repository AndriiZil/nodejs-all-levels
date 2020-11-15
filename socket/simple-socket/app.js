const express = require('express');
const http = require('http');
const socket = require('socket.io');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const host = '127.0.0.1';
const port = 7000;

const users = {};
const rooms = ['css', 'nodejs'];

app.use(express.json());

io.on('connection', (socket) => {
    const socketId = socket.id;

    socket.broadcast.emit('connect-client', `Client with id: ${socketId} connected`);

    socket.emit('message', 'I am a server');

    socket.on('joinRoom', (room) => {
        if (rooms.includes(room)) {
            console.log(`Socket id: ${socketId} joined "${room}"`);
            socket.join(room);
            io.to(room).emit('newUser', 'Hello from room');
            return socket.emit('success', 'You have successfully joined this room');
        } else {
            return socket.emit('error', `No room with name: "${room}"`);
        }
    });

    socket.on('room-message', ({ room, message }) => {
        io.to(room).emit('room-message', {
            message,
            name: 'Friend'
        });
    });

    socket.on('message', (message) => {
        console.log('Message', message);
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('user left', {
            message: `Client with id ${socketId} disconnected`
        })
    });

});

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile('index.html'));

app.get('/clients-count', (req, res) => {
    res.json({ clients: io.engine.clientsCount });
});

app.post('/client/:socketId', (req, res) => {
    const { socketId } = req.params;

    const { message } = req.body;

    if (clients.indexOf(socketId) !== -1) {
        io.to(socketId).emit(
            'private message',
            `Message: ${message}`
        )
        return res.status(200).json({ message });
    } else
        return res.status(404).json({ message: 'Client not found' });
})

server.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);
