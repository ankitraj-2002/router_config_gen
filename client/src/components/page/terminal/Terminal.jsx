// Terminal.js
import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const fitAddon = new FitAddon();

  useEffect(() => {
    const terminal = new Terminal();
    terminal.loadAddon(fitAddon);

    terminal.open(terminalRef.current);
    fitAddon.fit();

    terminal.write('Welcome to the React Terminal!\r\n');

    terminal.onData(data => {
      terminal.write(data);
    });

    window.addEventListener('resize', fitAddon.fit);

    return () => {
      window.removeEventListener('resize', fitAddon.fit);
      terminal.dispose();
    };
  }, [fitAddon]);

  return (
    <div
      ref={terminalRef}
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  );
};

export default TerminalComponent;