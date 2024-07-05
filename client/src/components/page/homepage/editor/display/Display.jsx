import React, { useEffect, useRef }from 'react';
import './display.css';

const Display = ({ CommandLine }) => {

  const outputRef = useRef(null);
  
  useEffect(() => {
    if(outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  },[CommandLine]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CommandLine)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy text: ', err);
      });
  };

  return (
    <div className="main-content">
       <div className="display-header">
          <button onClick={copyToClipboard} className="copy-button">Copy All</button>
        </div>
      <div className="display" ref={outputRef}> 
        <pre>{CommandLine}</pre>
      </div>
    </div>
  );
};

export default Display;