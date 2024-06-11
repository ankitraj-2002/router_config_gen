import React from 'react';

const Textbox = ({ text, onTextChange }) => {
  return (
    <input
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder="Type something..."
    />
  );
};

export default Textbox;