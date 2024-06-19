import React, { useState } from 'react';

const CommandGenerator = () => {
  const [filterName, setFilterName] = useState('');
  const [termNumber, setTermNumber] = useState('');
  const [action, setAction] = useState('');
  const [generatedCommand, setGeneratedCommand] = useState('');

  const handleGenerateCommand = () => {
    const command = `set firewall family ethernet-switching filter ${filterName} term ${termNumber} then ${action}`;
    setGeneratedCommand(command);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Juniper Switch Command Generator</h1>
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
      <div style={{ marginBottom: '10px' }}>
        <label>
          Term Number:
          <input
            type="text"
            value={termNumber}
            onChange={(e) => setTermNumber(e.target.value)}
            placeholder="e.g., 1"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Action:
          <input
            type="text"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            placeholder="e.g., accept"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <button
        onClick={handleGenerateCommand}
        style={{ marginTop: '10px' }}
        disabled={!filterName || !termNumber || !action}
      >
        Generate Command
      </button>
      {generatedCommand && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Command:</h2>
          <pre>{generatedCommand}</pre>
        </div>
      )}
    </div>
  );
};

export default CommandGenerator;
