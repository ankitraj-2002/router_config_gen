import React, { useState } from 'react';
import axios from 'axios';
import "./preset.css";
const Policer = ({setAppendLine}) => {
  const [policerName, setPolicerName] = useState('');
  const [bandwidthLimit, setBandwidthLimit] = useState('');
  const [burstSizeLimit, setBurstSizeLimit] = useState('');
  // const [generatedCommands, setGeneratedCommands] = useState([]);


    const handleGenerateAndPost = async (e) =>{
    e.preventDefault();

    const data = {
      policerName: policerName
    };
    try {
      const response = await axios.post('http://localhost:3001/policerNameTable', data);
      console.log('Response:', response.data);
      alert('Policer name added successfully!');
      setPolicerName(''); // Clear input field after successful submission
    } catch (error) {
      console.error('Error adding policer name:', error);
      alert('Failed to add policer name. Please try again.');
    }
  
    const commands = [
      `set firewall policer ${policerName} if-exceeding bandwidth-limit ${bandwidthLimit}`,
      `set firewall policer ${policerName} if-exceeding burst-size-limit ${burstSizeLimit}`,
      `set firewall policer ${policerName} then discard`
    ];
    setAppendLine(prev => [...prev,...commands]);
    // setGeneratedCommands(previous=>[...previous, ...commands]);
  };

  // const handleCopyAll = () => {
  //   const allCommands = generatedCommands.join('\n');
  //   navigator.clipboard.writeText(allCommands)
  //     .then(() => {
  //       alert('All commands copied to clipboard!');
  //     })
  //     .catch((err) => {
  //       console.error('Failed to copy!', err);
  //     });
  // };
  return (
    <div style={{ padding: '20px' }}>
      <h1> Policer Configuration Command </h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Policer Name:
          <input
            type="text"
            value={policerName}
            onChange={(e) => setPolicerName(e.target.value)}
            placeholder="e.g., BW-12m"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Bandwidth Limit:
          <input
            type="text"
            value={bandwidthLimit}
            onChange={(e) => setBandwidthLimit(e.target.value)}
            placeholder="e.g., 12288000"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Burst Size Limit:
          <input
            type="text"
            value={burstSizeLimit}
            onChange={(e) => setBurstSizeLimit(e.target.value)}
            placeholder="e.g., 512k"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <button
        onClick={handleGenerateAndPost}
        style={{ marginTop: '10px' }}
        disabled={!policerName || !bandwidthLimit || !burstSizeLimit}
      >
        Generate Commands
      </button>
      {/* {generatedCommands.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ display: 'inline-block' }}>Generated Commands:</h2>
          <button 
            onClick={handleCopyAll} 
            style={{ float: 'right', marginTop: '10px' }}
          >
            Copy All
          </button>
          <pre className="generatecommand" style={{ clear: 'both' }}>{generatedCommands.join('\n')}</pre>
        </div>
      )} */}
    </div>
  );
};

export default Policer;