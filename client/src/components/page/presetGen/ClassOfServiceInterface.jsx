import React, { useState } from 'react';

const ClassOfServiceInterface = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [shapingRate, setShapingRate] = useState('');
  const [generatedCodes, setGeneratedCodes] = useState([]);

  const handleGenerateCode = () => {
    if (interfaceName && shapingRate) {
      const code = `set class-of-service interfaces ${interfaceName} shaping-rate ${shapingRate}`;
      setGeneratedCodes(prevCodes => [...prevCodes, code]);
    }
  };

  const handleCopyAll = () => {
    const allCodes = generatedCodes.join('\n');
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
      <h1>Juniper Config Generator</h1>
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
        onClick={handleGenerateCode}
        style={{ marginTop: '10px', marginRight: '10px' }}
        disabled={!interfaceName || !shapingRate}
      >
        Generate Code
      </button>
      {generatedCodes.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ display: 'inline-block' }}>Generated Codes:</h2>
          <button 
            onClick={handleCopyAll} 
            style={{ float: 'right', marginTop: '35px' }}
          >
            Copy All
          </button>
          <pre style={{ clear: 'both' }}>{generatedCodes.join('\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default ClassOfServiceInterface;
