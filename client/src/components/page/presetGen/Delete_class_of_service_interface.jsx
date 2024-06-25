import React, { useState } from 'react';
import "./preset.css";
const DeleteCommandGenerator = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [shapingRate, setShapingRate] = useState('');
  const [generatedCommands, setGeneratedCommands] = useState([]);

  const handleGenerateCommands = () => {
    if(interfaceName && shapingRate){
      const commands = `delete class-of-service interfaces ${interfaceName} shaping-rate ${shapingRate}`;
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
      <h1>Delete_class_of_service_interface Commands </h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Class_Of_Service_Interface Name:
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
      <button
        onClick={handleGenerateCommands}
        style={{ marginTop: '10px' }}
        disabled={!interfaceName || !shapingRate}
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
