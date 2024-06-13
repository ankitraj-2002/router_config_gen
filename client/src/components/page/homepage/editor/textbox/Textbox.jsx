import React from 'react';
import './textbox.css'
const Textbox = ({ text, onTextChange }) => {
  return (
    <input
      className = "textbox"
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder="Type something..."
    />
  );
};

export default Textbox;