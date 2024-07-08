import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import backupicon from '../../images/backup.png'
import './terminal.css';

const socket = io('http://localhost:3002'); // Replace with your server URL

// function countWords(line) {
//   const words = line.split(' ').filter(word => word.trim() !== '');
//   return words.length;
// }
// function removeCharactersInRange(str, start, end) {
//   if (start < 0 || end >= str.length || start > end) {
//     throw new Error('Invalid range');
//   }
//   return str.slice(0, start) + str.slice(end + 1);
// }

const SSHTerminal = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState(22);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('Provide Credentials to Connect');
  const [command, setCommand] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  // const [linesToRemove, setLinesToRemove] = useState('');
const outputRef = useRef(null);
  useEffect(() => {
    // console.log("Mounted");
    const handleSshOutput = (data) => {
      // const filteredOutput = data.split('\n').slice(linesToRemove).join('\n').trim();
      const filteredOutput = data;
      setOutput((prevOutput) => prevOutput.trim() + '\n'+filteredOutput+'\n');
    };

    const handleSshStatus = (status) => {
      setIsConnected(status === 'Connected');
    };

    const handleError =() =>{
      alert("Unable to Connect, Please Recheck your Credentials");
      setOutput("Unable to Connect");
    }

    socket.on('ssh-output', handleSshOutput);
    socket.on('ssh-status', handleSshStatus);
    socket.on('ssh-error', handleError);
    // console.log("UnMounted");
    return () => {
      socket.off('ssh-output', handleSshOutput);
      socket.off('ssh-status', handleSshStatus);
      socket.off('ssh-error',handleError);
    };
  }, [setOutput]);
  
  // console.log(output);
  // console.log(command);
  useEffect(() => {
    if(outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  },[output]);
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
        // const linesToremove = countWords(commandToSend);
        // if(!(linesToRemove-1) === 0){
        //   setLinesToRemove(linesToRemove+100);
        // }else{
        //   setLinesToRemove(linesToremove);
        // }
        socket.emit('ssh-command', commandToSend);
        setCommand('');
        // // Clear input after sending command
        // setOutput((prevOutput) => prevOutput.trim() + `\n${commandToSend}`);
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
    link.download = 'Backup_config.txt'; // Set desired filename
    link.click();

    window.URL.revokeObjectURL(url); // Clean up the temporary URL
  };
  // console.log(command.length);
  // console.log(output.length);
  // for(let i = 0;i<output.length;i+=1){
  //   console.log(output[i]);
  // }
  return (
    <div className="ssh-terminal">
      <div className="connection-info">
        <div className='options'>
        <label htmlFor="host">Host:</label>
        <input
          className='inputoptions'
          type="text"
          id="host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          disabled={isConnected}
        />
        <label htmlFor="port">Port:</label>
        <input
        className='inputoptions'
          type="number"
          id="port"
          value={port}
          onChange={(e) => setPort(parseInt(e.target.value))}
          disabled={isConnected}
        />
        <label htmlFor="username">Username:</label>
        <input
        className='inputoptions'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isConnected}
        />
        <label htmlFor="password">Password:</label>
        <input
          className='inputoptions'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isConnected}
        />
        </div>
        <button
                className={`toggle-button ${isConnected ? 'connected' : 'disconnected'}`} onClick={handleConnect}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
      <div className="terminal-output" ref={outputRef}>
        <pre>{output}</pre>
      </div>
      <div className="ipCommand">
      <input
      className='inputText'
        type="text"
        placeholder="Enter command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleCommandKeyDown}
        disabled={!isConnected}
      />
      
      {isConnected && <button className="backupIconButton" onClick={handleBackup}>Backup&nbsp; <img className='icon' src = {backupicon} alt=''></img></button>}
    </div>
    </div>
  );
};

export default SSHTerminal;
