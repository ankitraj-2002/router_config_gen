import React, { useState } from 'react';
import "./preset.css";
const Interface = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [addressFamily,setaddressFamily] = useState('');
  const [filterName, setFilterName] = useState('');
  const [generatedCommand, setGeneratedCommand] = useState([]);

  const handleGenerateCommand = () => {
    if(interfaceName && addressFamily && filterName){
      const command = `set interfaces ${interfaceName} unit 0 family ${addressFamily} filter input ${filterName}`;
      setGeneratedCommand(previous => [...previous,command]);
    }
  };

  const handleCopyAll= () => {
    navigator.clipboard.writeText(generatedCommand)
      .then(() => {
        alert('Command copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Juniper Interface Filter Command Generator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Interface Name:
          <input
            type="text"
            value={interfaceName}
            onChange={(e) => setInterfaceName(e.target.value)}
            placeholder="e.g., ge-0/0/6"
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
            placeholder="e.g., Filter-12m"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <button
        onClick={handleGenerateCommand}
        style={{ marginTop: '10px' }}
        disabled={!interfaceName || !filterName}
      >
        Generate Code
      </button>
      {generatedCommand.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style ={{display: 'inline-block'}}>Generated Code:</h2>
          <button 
            onClick={handleCopyAll} 
            style={{ float: 'right', marginTop: '35px' }}
          >
            Copy All
          </button>
          <pre className="generatecommand" style = {{clear :'both'}}>{generatedCommand.join('\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default Interface;
