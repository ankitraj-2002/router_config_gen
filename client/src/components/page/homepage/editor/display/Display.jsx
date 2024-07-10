import React, { useEffect, useRef }from 'react';
import './display.css';
import copyimg from '../../../../images/copy2.png';
import downloadimg from '../../../../images/download2.png'

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

    const downloadText = () => {
    const blob = new Blob([CommandLine], { type: 'text/plain' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'Config_file.txt';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-content">
       <div className="display-header">
          <button onClick={downloadText} className='dispButtons' ><img className = "disp-icon" src= {downloadimg} alt=''></img></button>
          <button onClick={copyToClipboard} className='dispButtons' ><img className = "disp-icon" src= {copyimg} alt=''></img></button>
        </div>
      <div className="display" ref={outputRef}> 
        <pre>{CommandLine}</pre>
      </div>
    </div>
  );
};

export default Display;