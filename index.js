var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;

server.listen(port, () => {
});

io.on('connection', (socket) => {
    console.log('new socket connected');

    socket.on('travelor image', (data) => {
        // console.log(data['base64']);
        socket.broadcast.emit('travelor image broadcasted', {
            'base64': data['base64'],
        });
    });
});