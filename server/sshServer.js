const http = require('http');
const socketIo = require('socket.io');
const { Client } = require('ssh2');

const initializeSocketServer = (app) => {
	const server = http.createServer(app);
	const io = socketIo(server);

	io.on('connection', (socket)=>{
		console.log('New client connected');

		let conn = new Client();

		socket.on('ssh-connect',({host, port, username,password})=> {
			conn.on('ready', ()=>{
				console.log('Client :: ready');
				socket.emit('ssh-status', 'Connected');

				conn.shell((err, stream)=> {
					if(err) throw err;

					socket.on('ssh-command', (commmand)=> {
						stream.write(command+'\n');
					});

					stream.on('data', (data)=> {
						socket.emit('ssh-output',data.toString());
					}).stderr.on('data', (data)=>{
						socket.emit('ssh-output','STDERR: '+ data.toString());
					});
				});
			}).connect({
				host,
				port:port || 22,
				username,
				password
			});
		});
		socket.on('disconnect',()=>{
			console.log('Client disconnected');
			if(conn) conn.end();
		});
		
	});
	return server;
}

module.exports = initializeSocketServer;