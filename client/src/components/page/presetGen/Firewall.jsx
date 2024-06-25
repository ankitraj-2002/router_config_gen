import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommandGenerator = () => {
  const [filterName, setFilterName] = useState('');
  const [addressFamily, setaddressFamily] = useState('');
  const [termNumber, setTermNumber] = useState('');
  const [action, setAction] = useState('');
  const [generatedCommand, setGeneratedCommand] = useState('');
  const [policerNames, setPolicerNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/policerNameTable");
        setPolicerNames(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleGenerateCommand = () => {
    if (filterName && termNumber && action && addressFamily) {
      const command = `set firewall family ${addressFamily} filter ${filterName} term ${termNumber} then ${action}`;
      setGeneratedCommand(command);
    }
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generatedCommand)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy!', err);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Firewall Filters Command</h1>
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
          Term Name:
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
          Family:
          <select
            value={addressFamily}
            onChange={(e) => setaddressFamily(e.target.value)}
            style={{ marginLeft: '10px' }}
            required
          >
            <option value="">--Select Family--</option>
            <option value="ethernet-switching">ethernet-switching</option>
            <option value="inet">inet</option>
          </select>
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
            {policerNames.map(item => (
              <option key={item.id} value={item.policerName}>{item.policerName}</option>
            ))}
          </select>
        </label>
      </div>
      <button
        onClick={handleGenerateCommand}
        style={{ marginTop: '10px' }}
        disabled={!filterName || !termNumber || !action || !addressFamily}
      >
        Generate Code
      </button>
      {generatedCommand && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Code:</h2>
          <button
            onClick={handleCopyAll}
            style={{ float: 'right', marginTop: '10px' }}
          >
            Copy Code
          </button>
          <pre style={{ clear: 'both' }}>{generatedCommand}</pre>
        </div>
      )}
    </div>
  );
};

export default CommandGenerator;
