import React from 'react';
import './display.css';

const Display = ({ CommandLine }) => {
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
      <div className="display"> 
        <pre>{CommandLine}</pre>
      </div>
    </div>
  );
};

export default Display;