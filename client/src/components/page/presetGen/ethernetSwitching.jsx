import React, { useState } from 'react';

const CommandGenerator = () => {
  const [filterName, setFilterName] = useState('');
  const [termNumber, setTermNumber] = useState('');
  const [action, setAction] = useState('');
  const [generatedCommand, setGeneratedCommand] = useState([]);

  const handleGenerateCommand = () => {
	if(filterName && termNumber && action){
		const command = `set firewall family ethernet-switching filter ${filterName} term ${termNumber} then ${action}`;
		setGeneratedCommand(previous => [...previous,command]);
	}
  };

  const handleCopyAll = () => {
    const allCodes = generatedCommand.join('\n');
    navigator.clipboard.writeText(allCodes)
      .then(() => {
        alert('All codes copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy!', err);
      });
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
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            style={{ marginLeft: '10px' }}
            required
          >
            <option value="">--Select Action--</option>
            <option value="accept">accept</option>
            <option value="policer BW-12">policer BW-12</option>
            <option value="discard">discard</option>
          </select>
        </label>
      </div>
      <button
        onClick={handleGenerateCommand}
        style={{ marginTop: '10px' }}
        disabled={!filterName || !termNumber || !action}
      >
        Generate Command
      </button>
      {generatedCommand.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Command:</h2>
		  <button 
            onClick={handleCopyAll} 
            style={{ float: 'right', marginTop: '35px' }}
          >
            Copy All
          </button>
          <pre style = {{clear : 'both'}}>{generatedCommand.join('\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default CommandGenerator;
