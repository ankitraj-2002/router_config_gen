/*
import React from 'react';
import './display.css';

const Display = ({ CommandString }) => {
  return (
    <div className="display">
      {CommandString} 
    </div>
  );
};

export default Display;
*/
import React from 'react';
import './display.css';

const Display = ({ CommandLine}) => {
  return (
    <div className = 'display' >
      <pre>{CommandLine}</pre>
    </div>
  );
};

export default Display;