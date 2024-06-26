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

        socket.on('ssh-connect', ({ host, port, username, password }) => {
            let conn = new Client();
            console.log("New Client Connected");
            conn.on('ready', () => {
                console.log('Client :: ready');
                socket.emit('ssh-status', 'Connected');

                conn.shell((err, stream) => {
                    if (err) {
                        socket.emit('ssh-output', 'Error connecting to SSH server');
                        throw err;
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
                socket.emit('ssh-output', 'SSH connection error: ' + err.message);
                throw err;
            }).connect({
                host,
                port: port || 22,
                username,
                password
            });
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
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