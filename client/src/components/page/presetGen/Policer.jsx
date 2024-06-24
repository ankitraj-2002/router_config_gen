import React, { useState } from 'react';
import "./preset.css";
const Policer = () => {
  const [policerName, setPolicerName] = useState('');
  const [bandwidthLimit, setBandwidthLimit] = useState('');
  const [burstSizeLimit, setBurstSizeLimit] = useState('');
  const [generatedCommands, setGeneratedCommands] = useState([]);

  const handleGenerateCommands = () => {
    const commands = [
      `set firewall policer ${policerName} if-exceeding bandwidth-limit ${bandwidthLimit}`,
      `set firewall policer ${policerName} if-exceeding burst-size-limit ${burstSizeLimit}`,
      `set firewall policer ${policerName} then discard`
    ];
    setGeneratedCommands(previous=>[...previous, ...commands]);
  };

  const handleCopyAll = () => {
    const allCommands = generatedCommands.join('\n');
    navigator.clipboard.writeText(allCommands)
      .then(() => {
        alert('All commands copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Juniper Policer Command Generator</h1>
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
        onClick={handleGenerateCommands}
        style={{ marginTop: '10px' }}
        disabled={!policerName || !bandwidthLimit || !burstSizeLimit}
      >
        Generate Commands
      </button>
      {generatedCommands.length > 0 && (
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
      )}
    </div>
  );
};

export default Policer;