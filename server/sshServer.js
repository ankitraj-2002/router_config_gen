const express = require('express'); // Import express if not already done
const app = express(); // Initialize express app
const http = require('http');
const socketIo = require('socket.io');
const { Client } = require('ssh2');

const initializeSocketServer = () => {
    const server = http.createServer(app); // Create an HTTP server
    const io = socketIo(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });

   io.on('connection', (socket) => {
    console.log('New client connected');
    let conn = null;

    socket.on('ssh-connect', ({ host, port, username, password }) => {
        conn = new Client();
        console.log("New SSH connection request");

        conn.on('ready', () => {
            console.log('Client :: ready');
            socket.emit('ssh-status', 'Connected');

            conn.shell((err, stream) => {
                if (err) {
                    socket.emit('ssh-error', 'Error connecting to SSH server');
                    return;
                }

                socket.on('ssh-command', (command) => {
                    stream.write(command + '\n');
                });

                stream.on('data', (data) => {
                    socket.emit('ssh-output', data.toString());
                }).on('close', () => {
                    console.log('Stream :: close');
                    conn.end();
                }).stderr.on('data', (data) => {
                    socket.emit('ssh-output', 'STDERR: ' + data.toString());
                });
            });
        }).on('error', (err) => {
            socket.emit('ssh-error', 'SSH connection error: ' + err.message);
        }).connect({
            host,
            port: port || 22,
            username,
            password
        });
    });

    socket.on('ssh-disconnect', () => {
        if (conn) {
            conn.end();
            socket.emit('ssh-status', 'Disconnected');
        }
        console.log('Client disconnected from SSH');
    });

    socket.on('disconnect', () => {
        if (conn) {
            conn.end();
        }
        console.log('Client disconnected from Socket.IO');
    });
});

    server.listen(3002, () => {
        console.log('Socket.io server running on port 3002');
    });

    return server;
};

// Start the server if this is the main module
if (require.main === module) {
    initializeSocketServer();
}

module.exports = initializeSocketServer;   

