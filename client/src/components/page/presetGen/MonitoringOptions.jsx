import React, { useState } from 'react';

const CommandGenerator = ({setAppendLine}) => {
  const [interfaceName, setInterfaceName] = useState('');
  const [bgpSummary, setBgpSummary] = useState('');
  // const [generatedCommand, setGeneratedCommand] = useState([]);

  const handleGenerateShowInt = () => {
    if (interfaceName) {
		const code = `show int ${interfaceName}`;
    setAppendLine(prev => [...prev,code]);
      // setGeneratedCommand(previous => [...previous,code]);
    }
  };

  const handleGenerateMonitorInterface = () => {
    if (interfaceName) {
		const code = `monitor interface ${interfaceName}`;
        setAppendLine(prev => [...prev,code]);
      // setGeneratedCommand(previous =>[...previous,code]);
    }
  };

  const handleGenerateBgpSummary = () => {
    if(bgpSummary){
      const code = `show bgp ${bgpSummary}`;
      setAppendLine(prev => [...prev,code]);
      // setGeneratedCommand(previous =>[...previous,code]);
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Monitoring options Command</h1>

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
          For Interface info
        </button>
        <button onClick={handleGenerateMonitorInterface} style={{ marginRight: '10px' }}>
          For Monitoring Interface
        </button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          show bgp:
          <select
            value={bgpSummary}
            onChange={(e) => setBgpSummary(e.target.value)}
            style={{ marginLeft: '10px' }}
            required
          >
            <option value="">--Select Bgp Monitoring Options--</option>
            <option value="ethernet-switching">summary</option>
            <option value="summary group">summary group</option>
            <option value="summary instance">summary instance</option>
            <option value="summary extensive">summary extensive</option>
            <option value="summary terse">summary terse</option>
          </select>
        </label>
        <button onClick={handleGenerateBgpSummary} style={{ marginLeft: '20px' }}>
          For Bgp Monitoring
        </button>
      </div>
    </div>
  );
};

export default CommandGenerator;
