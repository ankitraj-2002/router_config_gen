import React, { useState } from 'react';
import "./preset.css";
const DeleteCommandGenerator = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [addressFamily,setaddressFamily] = useState('');
  const [filterName, setFilterName] = useState('');
  const [generatedCommands, setGeneratedCommands] = useState([]);

  const handleGenerateCommands = () => {
    if(interfaceName && addressFamily && filterName){
      const commands = `delete interfaces ${interfaceName} unit 0 family ${addressFamily} filter input ${filterName}`;
      setGeneratedCommands(previous => [...previous,commands]);
    }
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
      <h1>Juniper Delete Command Generator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Interface Name:
          <input
            type="text"
            value={interfaceName}
            onChange={(e) => setInterfaceName(e.target.value)}
            placeholder="e.g., ge-0/0/15"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Family:
          <select
            value={addressFamily}
            onChange={(e) => setaddressFamily(e.target.value)}
            style={{ marginLeft: '10px' }}
            required
          >
            <option value="">--Select Family--</option>
            <option value="ethernet-switching">ethernet-switching</option>
            <option value="inet">inet</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Filter Name:
          <input
            type="text"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            placeholder="e.g., Filter-20m"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <button
        onClick={handleGenerateCommands}
        style={{ marginTop: '10px' }}
        disabled={!interfaceName || !addressFamily || !filterName}
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
          <pre style={{ clear: 'both' }}>{generatedCommands.join('\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default DeleteCommandGenerator;
