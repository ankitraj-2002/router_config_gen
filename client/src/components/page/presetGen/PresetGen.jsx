import React, { useState } from 'react';
import ClassOfServiceInterface from './ClassOfServiceInterface';
import Firewall from './Firewall';
import Policer from './Policer';
import Interface from './Interface';
import delete_interface from './delete_interface';
import Delete_class_of_service_interface from './Delete_class_of_service_interface';

const components = {
  ClassOfServiceInterface: ClassOfServiceInterface,
  Firewall: Firewall,
  Policer: Policer,
  Interface: Interface,
  delete_interface: delete_interface,
  Delete_class_of_service_interface: Delete_class_of_service_interface,
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
        <option value="Firewall">Firewall</option>
        <option value="Policer">Policer</option>
        <option value="Interface">Interface</option>
        <option value="delete_interface">delete_interface</option>
        <option value="Delete_class_of_service_interface">Delete_class_of_service_interface</option>
      </select>
      <div style={{ marginTop: '20px' }}>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default DropdownRenderer;
