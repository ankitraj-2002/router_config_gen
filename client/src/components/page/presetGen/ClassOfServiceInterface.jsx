import React, { useState } from 'react';
import "./preset.css"; 
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
    <div >
      <h1>Juniper Config Generator</h1>
      <div >
        <label>
          Interface Name:
          <input
            type="text"
            value={interfaceName}
            onChange={(e) => setInterfaceName(e.target.value)}
            placeholder="e.g., ge-0/0/6"
            required
          />
        </label>
      </div>
      <div >
        <label>
          Shaping Rate:
          <input
            type="text"
            value={shapingRate}
            onChange={(e) => setShapingRate(e.target.value)}
            placeholder="e.g., 20m"
            required
          />
        </label>
      </div>
      <button
        onClick={handleGenerateCode}
        disabled={!interfaceName || !shapingRate}
      >
        Generate Code
      </button>
      {generatedCodes.length > 0 && (
        <div >
          <h2 >Generated Codes:</h2>
          <button 
            onClick={handleCopyAll} 
          >
            Copy All
          </button>
          <pre>{generatedCodes.join('\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default ClassOfServiceInterface;
