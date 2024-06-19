import React, { useState } from 'react';
import PresetGen from './PresetGen';
import Homepage from '../homepage/Homepage';
import ClassOfServiceInterface from './ClassOfServiceInterface';
import ethernetSwitching from './ethernetSwitching';

const components = {
  ClassOfServiceInterface: ClassOfServiceInterface,
  ethernetSwitching: ethernetSwitching,
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
        <option value="ClassOfServiceInterface">ClassOfServicesInterface</option>
        <option value="ethernetSwitching">ethernetSwitching</option>

      </select>
      <div style={{ marginTop: '20px' }}>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default DropdownRenderer;
