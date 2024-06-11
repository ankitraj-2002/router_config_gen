import React, { useState } from 'react';
import './editor.css';
import Textbox from './textbox/Textbox';
import Options from './options/Options';
import Display from '../display/Display';
import CurrentCommandDisplay from './curcmddisp/CurrentCommandDisplay';

const Editor = () => {
  const [showTextbox, setShowTextbox] = useState(false);
  const [appendedText, setAppendedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [appendLine,setAppendLine] = useState('');
  const handleClick = () => {
    setShowTextbox(true);
  };

  const handleTextChange = (newText) => {
    setInputText(newText);
  };

  const handlePushText = () => {
    setAppendedText((prevText) => prevText + inputText+ ' ');
    setInputText(''); // Clear the text box
    setShowTextbox(false);
  };
  const handleAppendText = (text) => {
    setAppendedText((prevText) => prevText + text + ' ');
    console.log(appendedText);
  };
  const handleAddNewline = () => {
    setAppendLine((prevline) => prevline + appendedText +'\n');
    console.log(appendedText);
    setAppendedText('');
    console.log(appendLine);
  };


  return (
    <div>
      <Display CommandLine = {appendLine}  />
      <CurrentCommandDisplay commandString={appendedText}/>
      {showTextbox ? (
        <>
          <Textbox text={inputText} onTextChange={handleTextChange} />
          <button onClick={handlePushText}>Push Text</button>
        </>
      ) : (
        <>
          <Options onAppendText = {handleAppendText} />
          <button className="my-custom-button" onClick={handleClick}>
            Don't see the required command... Add mannually form here
          </button>
          <button className="my-custom-button" onClick={handleAddNewline}>
            Next-Command
          </button>
        </>
      )}
    </div>
  );
};

export default Editor;