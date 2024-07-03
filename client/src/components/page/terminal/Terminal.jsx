import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import backupicon from '../../images/backup.png'
import './terminal.css';

const socket = io('http://localhost:3002'); // Replace with your server URL

// function countWords(line) {
//   const words = line.split(' ').filter(word => word.trim() !== '');
//   return words.length;
// }

const SSHTerminal = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState(22);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState(' Provide Credentials to Connect');
  const [command, setCommand] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  // const [linesToRemove, setLinesToRemove] = useState('');  
  const [wordCount, setWordCount] = useState(0);


  useEffect(() => {

     const handleSshOutput = (data) => {
      setWordCount(wordCount-1);
      if (wordCount>=0){
      setOutput((prevOutput) => prevOutput.trim() + " " +data );  
      }
      else {
      // const filteredOutput = data.split('\n').slice(linesToRemove).join('\n').trim();
      setOutput((prevOutput) => prevOutput.trim() + '\n' + data );
// 
      }
    };

    const handleSshStatus = (status) => {
      setIsConnected(status === 'Connected');
    };

     socket.on('ssh-output', handleSshOutput);
    socket.on('ssh-status', handleSshStatus);
    socket.on('ssh-error', handleError);

    return () => {
      socket.off('ssh-output', handleSshOutput);
      socket.off('ssh-status', handleSshStatus);
       socket.on('ssh-error', handleError);
    };
  }, [setOutput,wordCount]);


     const handleError = () =>{
      alert("Unable to Connect, Please Recheck your Credentials");
      setOutput("Unable to Connect");
    }

  const handleConnect = async () => {
    if (!isConnected) {
      setOutput("");
      await socket.emit('ssh-connect', { host, port, username, password });
    } else {
      socket.emit('ssh-disconnect');
      setOutput("  Disconnected ");
      alert("Shell Session Disconnected");      
      setIsConnected(false);
    }
  };
  
  const handleCommandKeyDown = (event) => {
    if (event.key === 'Enter' && isConnected) {
      event.preventDefault();
      const commandToSend = command.trim();
      if (commandToSend) {
        // const Toremove = countWords(commandToSend);

        socket.emit('ssh-command', commandToSend);
        setCommand(''); // Clear input after sending command
        setOutput((prevOutput) => prevOutput.trim() + `\n${commandToSend}`);
        let commandWithoutSpace = commandToSend.replace(/\s/g, '');
        setWordCount(commandWithoutSpace.length);
      }
    }
  };

  const handleBackup = async () => {
    if (!isConnected) {
      return; // Don't proceed if not connected
    }

    const commandToSend = 'show configuration | display set | no-more';
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
      <div className="ipCommand">
      <input
        type="text"
        placeholder="Enter command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleCommandKeyDown}
        disabled={!isConnected}
      />
      
      {isConnected && <button className="backupIconButton" onClick={handleBackup}>Backup<img className='icon' src = {backupicon} alt=''></img></button>}
    </div>
    </div>
  );
};

export default SSHTerminal;
