import React, { useState } from 'react';

const PresetGen = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [shapingRate, setShapingRate] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerateCode = () => {
    const code = `set class-of-service interfaces ${interfaceName} shaping-rate ${shapingRate}`;
    setGeneratedCode(code);
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
          />
        </label>
      </div>
      <button onClick={handleGenerateCode} style={{ marginTop: '10px' }}>
        Generate Code
      </button>
      {generatedCode && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Code:</h2>
          <pre>{generatedCode}</pre>
        </div>
      )}
    </div>
  );
};

export default PresetGen;
