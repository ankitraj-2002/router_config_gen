import React, { useState } from 'react';
import ClassOfServiceInterface from './ClassOfServiceInterface';
import EthernetSwitching from './EthernetSwitching';
import Policer from './Policer';

const components = {
  ClassOfServiceInterface: ClassOfServiceInterface,
  EthernetSwitching: EthernetSwitching,
  Policer: Policer,
};

const DropdownRenderer = () => {
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const SelectedComponent = components[selectedComponent];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Select a Component</h1>
      <select value={selectedComponent} onChange={handleChange}>
        <option value="">--Select a Component--</option>
        <option value="ClassOfServiceInterface">Class_Of_Services_Interface</option>
        <option value="EthernetSwitching">Ethernet_Switching</option>
        <option value="Policer">Policer</option>
      </select>
      <div style={{ marginTop: '20px' }}>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default DropdownRenderer;
