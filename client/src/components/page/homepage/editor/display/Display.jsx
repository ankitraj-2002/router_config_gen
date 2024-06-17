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
    <div className='display'>
      <button onClick={copyToClipboard} className='copy-button'>Copy All</button>
      <pre>{CommandLine}</pre>
    </div>
  );
};

export default Display;
