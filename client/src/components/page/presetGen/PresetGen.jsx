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
    <div className = "preSetMain">
      <div className="componentListHeader">
      <h3 className="componentListItem">Select a Component</h3>
      <select className="componentListItem" value={selectedComponent} onChange={handleChange}>
        <option className = "listItems" value="">--Select a Component--</option>
        <option className = "listItems" value="ClassOfServiceInterface">Class_Of_Services_Interface</option>
        <option className = "listItems" value="Firewall">Firewall</option>
        <option className = "listItems" value="Policer">Policer</option>
        <option className = "listItems" value="Interface">Interface</option>
        <option className = "listItems" value="delete_interface">delete_interface</option>
        <option className = "listItems" value="Delete_class_of_service_interface">Delete_class_of_service_interface</option>
      </select>
      </div>
      {SelectedComponent &&
      <div className='selectedComponent'>
         <SelectedComponent />
      </div> }
    </div>
  );
};

export default DropdownRenderer;
