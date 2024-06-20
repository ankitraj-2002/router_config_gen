import React, { useState } from 'react';

const DeleteCommandGenerator = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [shapingRate, setShapingRate] = useState('');
  const [filterName, setFilterName] = useState('');
  const [generatedCommands, setGeneratedCommands] = useState([]);

  const handleGenerateCommands = () => {
    const commands = [
      `delete class-of-service interfaces ${interfaceName} shaping-rate ${shapingRate}`,
      `delete interfaces ${interfaceName} unit 0 family ethernet-switching filter input ${filterName}`
    ];
    setGeneratedCommands(commands);
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
          Shaping Rate:
          <input
            type="text"
            value={shapingRate}
            onChange={(e) => setShapingRate(e.target.value)}
            placeholder="e.g., 20m"
            style={{ marginLeft: '10px' }}
            required
          />
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
        disabled={!interfaceName || !shapingRate || !filterName}
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
