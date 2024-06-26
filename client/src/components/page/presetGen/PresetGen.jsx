import React, { useState } from 'react';
import ClassOfServiceInterface from './ClassOfServiceInterface';
import Firewall from './Firewall';
import Policer from './Policer';
import Interface from './Interface';
import delete_interface from './delete_interface';
import Delete_class_of_service_interface from './Delete_class_of_service_interface';
import Interface_description from './Interface_description';
import RoutingOption from './RoutingOption';
import MonitoringOptions from './MonitoringOptions';
import Display from './Display';
const components = {
  ClassOfServiceInterface: ClassOfServiceInterface,
  Firewall: Firewall,
  Policer: Policer,
  Interface: Interface,
  delete_interface: delete_interface,
  Delete_class_of_service_interface: Delete_class_of_service_interface,
  Interface_description: Interface_description,
  RoutingOption: RoutingOption,
  MonitoringOptions: MonitoringOptions,
};

const DropdownRenderer = () => {
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const[appendLine, setAppendLine] = useState([]);

  const SelectedComponent = components[selectedComponent];

  return (
    <div className = "preSetMain">
      <div className='displaybox'> <Display CommandLine={appendLine} /></div>
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
        <option className = "listItems" value="MonitoringOptions">Monitoring-Options</option>
        <option className = "listItems" value="RoutingOption">Routing-Options</option>
        <option className = "listItems" value="Interface_description">Interface_description</option>

      </select>
      </div>
      {SelectedComponent &&
      <div className='selectedComponent'>
         <SelectedComponent setAppendLine={setAppendLine}/>
      </div> }
    </div>
  );
};

export default DropdownRenderer;
