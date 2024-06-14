import React, { useState } from 'react';
import './editor.css';
import Textbox from './textbox/Textbox';
import Options from './options/Options';
import Display from './display/Display';
import CurrentCommandDisplay from './curcmddisp/CurrentCommandDisplay';
// import './curcmddisp.css';
import './curcmddisp/curcmddisp.css';

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


//   return (<>
//     <div className = "left-panel">
//       <Display CommandLine = {appendLine}  />
//     </div>
//     <div className = "right-panel">
//       <CurrentCommandDisplay commandString={appendedText}/>
//       {showTextbox ? (
//         <>
//           <Textbox text={inputText} onTextChange={handleTextChange} />
//           <button onClick={handlePushText}>Push Text</button>
//         </>
//       ) : (
//         <>
//           <Options onAppendText = {handleAppendText} />
//           <button className="button" onClick={handleClick}>
//             Add Manually
//           </button>
//           <button className="button" onClick={handleAddNewline}>
//             Next-Command
//           </button>
//         </>
//       )}
//     </div>
//     </>
//   );
// };
// return (
//   <>
//     <div className="left-panel">
//       <Display CommandLine={appendLine} />
//     </div>
//     <div className="right-panel">
//       <CurrentCommandDisplay commandString={appendedText} />
//       {showTextbox ? (
//         <>
//           <Textbox text={inputText} onTextChange={handleTextChange} />
//           <button onClick={handlePushText}>Push Text</button>
//         </>
//       ) : (
//         <div className="button-container">
//           <Options onAppendText={handleAppendText} />
//           <button className="button" onClick={handleClick}>
//             Add Manually
//           </button>
//           <button className="button" onClick={handleAddNewline}>
//             Next-Command
//           </button>
//         </div>
//       )}
//     </div>
//   </>
// );
// };

// export default Editor;
return (
  <>
    <div className='left-panel'>
      <Display CommandLine={appendLine} />
    </div>
    <div className='right-panel'>
      <CurrentCommandDisplay commandString={appendedText} />
      {showTextbox ? (
        <>
          <Textbox text={inputText} onTextChange={handleTextChange} />
          <button onClick={handlePushText} className='button'>Push Text</button>
        </>
      ) : (
        <div className='options-container'>
          <Options onAppendText={handleAppendText} />
          <button className='button' onClick={handleClick}>
            Add Manually
          </button>
          <button className='button' onClick={handleAddNewline}>
            Next-Command
          </button>
        </div>
      )}
    </div>
  </>
);
};

export default Editor;