const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const { Client } = require('ssh2');

// Function to remove ANSI escape sequences and control characters
function cleanAndFormatData(data) {
  const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]|[\b\r]|[%]/g;
  // const controlChars = /[]/g;
  return data.replace(ansiRegex, '');
}

const initializeSocketServer = () => {
  const server = http.createServer(app);
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
            const cleanedData = cleanAndFormatData(data.toString());
            socket.emit('ssh-output', cleanedData);
          }).on('close', () => {
            console.log('Stream :: close');
            conn.end();
          }).stderr.on('data', (data) => {
            const cleanedData = cleanAndFormatData(data.toString());
            socket.emit('ssh-output', 'STDERR: ' + cleanedData);
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
  });

  server.listen(3002, () => {
    console.log('Socket.io server running on port 3002');
  });

  return server;
};

if (require.main === module) {
  initializeSocketServer();
}

module.exports = initializeSocketServer;
