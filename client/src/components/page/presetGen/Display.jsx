import React from 'react';
import './presetDisp.css';
import copyimg from "../../images/copy.png"
import downloadimg from "../../images/download.png"


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

    const downloadText = () => {
    const blob = new Blob([CommandLine.join("\n")], { type: 'text/plain' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'commandline.txt';

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
      <div className="display"> 
        <pre>{CommandLine.join("\n")}</pre>
      </div>
    </div>
  );
};

export default Display;