// import React from 'react' ;
// const CurrentCommandDisplay = ({commandString}) => {
//   return (
//     <div className='current-command-display'>{commandString}</div>
//   )
// };

// export default CurrentCommandDisplay;


import React, { useRef, useEffect } from 'react';
import './curcmddisp.css';

const CurrentCommandDisplay = ({ commandString, onChange }) => {
  const textareaRef = useRef(null);

  // Automatically adjust textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height before calculating
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [commandString]);

  return (
    <textarea
      ref={textareaRef}
      className='current-command-display'
      value={commandString}
      onChange={onChange}
      rows={1} // Initially start with one row
      placeholder="Your current command will appear here....."
    />
  );
};

export default CurrentCommandDisplay;

