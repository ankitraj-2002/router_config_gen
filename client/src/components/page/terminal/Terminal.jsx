import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const socket = io('http://localhost:3001');

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const [term, setTerm] = useState(null);

  const [host, setHost] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [port, setPort] = useState(22);

  useEffect(() => {
    const terminal = new Terminal();
    terminal.open(terminalRef.current);
    setTerm(terminal);

    socket.on('ssh-output', (data) => {
      terminal.write(data);
    });

    return () => socket.disconnect();
  }, []);

  const handleConnect = () => {
    socket.emit('ssh-connect', { host, port, username, password });
  };

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      socket.emit('ssh-command', term.buffer.active.getLine(term.buffer.active.cursorY).translateToString());
      term.write('\r\n');
    }
  };

  useEffect(() => {
    if (term) {
      term.onKey(handleInput);
    }
  }, [term]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />
        <input
          type="number"
          placeholder="Port"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleConnect}>Connect</button>
      </div>
      <div ref={terminalRef} style={{ width: '100%', height: '400px', marginTop: '20px', border: '1px solid black' }}></div>
    </div>
  );
};

export default TerminalComponent;
