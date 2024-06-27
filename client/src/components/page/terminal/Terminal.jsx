import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3002'); // Replace with your server URL

const SSHTerminal = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState(22); // Default SSH port
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Define the socket event listeners
    const handleSshOutput = (data) => {
      setOutput((prevOutput) => prevOutput + data + '\n');
    };

    const handleSshStatus = (status) => {
      setIsConnected(status === 'Connected');
    };

    // Add the socket event listeners
    socket.on('ssh-output', handleSshOutput);
    socket.on('ssh-status', handleSshStatus);

    // Cleanup the listeners on component unmount or when dependencies change
    return () => {
      socket.off('ssh-output', handleSshOutput);
      socket.off('ssh-status', handleSshStatus);
    };
  }, []);

  const handleConnect = async () => {
    if (!isConnected) {
      await socket.emit('ssh-connect', { host, port, username, password });
    } else {
      socket.emit('disconnect');
      setIsConnected(false);
    }
  };

  const handleCommand = (event) => {
    if (event.key === 'Enter' && isConnected) {
      const command = event.target.value.trim();
      socket.emit('ssh-command', command);
      event.target.value = ''; // Clear input after sending command
    }
  };

  return (
    <div className="ssh-terminal">
      <div className="connection-info">
        <label htmlFor="host">Host:</label>
        <input
          type="text"
          id="host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          disabled={isConnected}
        />
        <label htmlFor="port">Port:</label>
        <input
          type="number"
          id="port"
          value={port}
          onChange={(e) => setPort(parseInt(e.target.value))}
          disabled={isConnected}
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isConnected}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isConnected}
        />
        <button onClick={handleConnect}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
      <div className="terminal-output">
        <pre>{output}</pre>
      </div>
      <input
        type="text"
        placeholder="Enter command"
        onKeyDown={handleCommand}
        disabled={!isConnected}
      />
    </div>
  );
};

export default SSHTerminal;
