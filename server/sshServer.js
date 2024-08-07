const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const { Client } = require('ssh2');

// Function to remove ANSI escape sequences
function removeEscapeSequences(data) {
  // Regular expression to match ANSI escape sequences
  const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]|[\b\r]|[%]/g;
    return data.replace(ansiRegex, '');
}

// Function to clean and format data
function cleanAndFormatData(data) {
  // Remove ANSI escape sequences
  const cleanedData = removeEscapeSequences(data);
  
  // Additional formatting if needed
  // For example, split lines, trim spaces, etc.
  const formattedData = cleanedData.split('\n').map(line => line.trim()).filter(line => line);

  return formattedData;
}

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
            const cleanedData = cleanAndFormatData(data.toString()).join('\n');
            if(cleanedData.length > 0){
            socket.emit('ssh-output', cleanedData);
            }
          }).on('close', () => {
            console.log('Stream :: close');
            conn.end();
          }).stderr.on('data', (data) => {
            const cleanedData = cleanAndFormatData(data.toString()).join('\n');
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

// Start the server if this is the main module
if (require.main === module) {
  initializeSocketServer();
}

module.exports = initializeSocketServer;
