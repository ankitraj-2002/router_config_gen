import React, { useState, useRef } from 'react';
import './editor.css';
import Textbox from './textbox/Textbox';
import Options from './options/Options';
import Display from './display/Display';
import CurrentCommandDisplay from './curcmddisp/CurrentCommandDisplay';
import './curcmddisp/curcmddisp.css';

const Editor = () => {
  const [showTextbox, setShowTextbox] = useState(false);
  const [appendedText, setAppendedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [appendLine, setAppendLine] = useState('');
  const resetNextCommand = useRef(null);

  const handleClick = () => {
    setShowTextbox(true);
  };

  const handleTextChange = (newText) => {
    setInputText(newText);
  };

  const handlePushText = () => {
    setAppendedText((prevText) => prevText + inputText + ' ');
    setInputText(''); // Clear the text box
    setShowTextbox(false);
  };

  const handleAppendText = (text) => {
    setAppendedText((prevText) => prevText + text + ' ');
    console.log(appendedText);
  };

  const handleAddNewline = () => {
    setAppendLine((prevLine) => prevLine + appendedText + '\n');
    console.log(appendedText);
    setAppendedText('');
    console.log(appendLine);
    if (resetNextCommand.current) {
      resetNextCommand.current();
    }
  };
return (
  <>
    <div className='left-panel'>
      <Display CommandLine={appendLine} />
    </div>
    <div className='right-panel'>
      <CurrentCommandDisplay commandString={appendedText} />
      {showTextbox ? (
        <div className='manual'>
          <Textbox text={inputText} onTextChange={handleTextChange} />
          <button onClick={handlePushText} className='button'>Push Text</button>
        </div>
      ) : (
        <div classsName = "option-container">
          <Options onAppendText={handleAppendText} resetNextCommand={resetNextCommand} />
          <div className='rhs'>
          <button className="button" onClick={handleClick}>
            Add manually
          </button>
          <button className='button' onClick={handleAddNewline}>
            Next-Command
          </button>
          </div>
        </div>
      )}
    </div>
  </>
);
};

export default Editor;
