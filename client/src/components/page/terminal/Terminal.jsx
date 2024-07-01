import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './terminal.css';

const socket = io('http://localhost:3002'); // Replace with your server URL

const SSHTerminal = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState(22);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('');
  const [command, setCommand] = useState('');
  const [isConnected, setIsConnected] = useState(false);


  useEffect(() => {
    const handleSshOutput = (data) => {
      setOutput((prevOutput) => prevOutput + data + '\n');
    };

    const handleSshStatus = (status) => {
      setIsConnected(status === 'Connected');
    };

    socket.on('ssh-output', handleSshOutput);
    socket.on('ssh-status', handleSshStatus);

    return () => {
      socket.off('ssh-output', handleSshOutput);
      socket.off('ssh-status', handleSshStatus);
    };
  }, []);

  const handleConnect = async () => {
    if (!isConnected) {
      await socket.emit('ssh-connect', { host, port, username, password });
    } else {
      socket.emit('ssh-disconnect');
      setIsConnected(false);
    }
  };

  const handleCommandKeyDown = (event) => {
    if (event.key === 'Enter' && isConnected) {
      event.preventDefault();
      const commandToSend = command.trim();
      if (commandToSend) {
        socket.emit('ssh-command', commandToSend);
        setCommand(''); // Clear input after sending command
        // setOutput((prevOutput) => prevOutput + `\n${commandToSend}\n`); // Add the command to the output
      }
    }
  };
  const handleBackup = async () => {
    if (!isConnected) {
      return; // Don't proceed if not connected
    }
  
    const commandToSend = 'ifconfig';
    await socket.emit('ssh-command', commandToSend);
  
    let backupOutput = '';
    const handleSshOutputForBackup = (data) => {
      backupOutput += data + '\n';
    };
  
    socket.on('ssh-output', handleSshOutputForBackup);
  
    // Wait for the command to finish executing before creating download link
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust timeout as needed
    socket.off('ssh-output', handleSshOutputForBackup);
  
    const blob = new Blob([backupOutput], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Router_config.txt'; // Set desired filename
    link.click();
  
    window.URL.revokeObjectURL(url); // Clean up the temporary URL
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
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleCommandKeyDown}
        disabled={!isConnected}
      />
      <button onClick={handleBackup}>Download Backup</button>
    </div>
  );
};

export default SSHTerminal;
