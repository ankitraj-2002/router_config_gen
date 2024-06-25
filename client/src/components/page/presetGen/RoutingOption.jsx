import React, { useState } from 'react';

const DeleteCommandGenerator = () => {
  const [defaultroute,setDefaultRoute] = useState('');
  const [destinationroute,setDestinationRoute] = useState('');
  const [generatedCommands, setGeneratedCommands] = useState([]);

  const handleGenerateCommands = () => {
    if(defaultroute && destinationroute){
      const commands = `set routing-options static route ${defaultroute} next-hop ${destinationroute}`;
      setGeneratedCommands(previous =>[...previous,commands]);
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
      <h1>Routing optios  Command </h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Default Route:
          <input
            type="text"
            value={defaultroute}
            onChange={(e) => setDefaultRoute(e.target.value)}
            placeholder="e.g., ge-0/0/15"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Destination:
          <input
            type="text"
            value={destinationroute}
            onChange={(e) => setDestinationRoute(e.target.value)}
            placeholder="e.g., 20m"
            style={{ marginLeft: '10px' }}
            required
          />
        </label>
      </div>
      <button
        onClick={handleGenerateCommands}
        style={{ marginTop: '10px' }}
        disabled={!defaultroute || !destinationroute}
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

export default DeleteCommandGenerator;
