import React, { useState } from 'react';

const CommandGenerator = () => {
  const [interfaceName, setInterfaceName] = useState('');
  const [bgpSummary, setBgpSummary] = useState('');
  const [generatedCommand, setGeneratedCommand] = useState([]);

  const handleGenerateShowInt = () => {
    if (interfaceName) {
		const code = `show int ${interfaceName}`;
      setGeneratedCommand(previous => [...previous,code]);
    }
  };

  const handleGenerateMonitorInterface = () => {
    if (interfaceName) {
		const code = `monitor interface ${interfaceName}`;
      setGeneratedCommand(previous =>[...previous,code]);
    }
  };

//   const handleGenerateBgpSummary = () => {
//     setGeneratedCommand('show bgp summary');
//   };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Command Generator</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Interface Name:
          <input
            type="text"
            value={interfaceName}
            onChange={(e) => setInterfaceName(e.target.value)}
            placeholder="e.g., ge-0/0/0"
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <button onClick={handleGenerateShowInt} style={{ marginRight: '10px' }}>
          Generate 'show int'
        </button>
        <button onClick={handleGenerateMonitorInterface} style={{ marginRight: '10px' }}>
          Generate 'monitor interface'
        </button>
        {/* <button onClick={handleGenerateBgpSummary}>
          Generate 'show bgp summary'
        </button> */}
      </div>

      {generatedCommand && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Command:</h2>
          <pre>{generatedCommand.join('\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default CommandGenerator;
