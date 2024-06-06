import React,{useState} from 'react';
import './editor.css';
import Textbox from './textbox/Textbox'
import Options from './options/Options'

const Editor= () => {
  const [showTextbox, setShowTextbox] = useState(false);

  const handleClick = () => {
    setShowTextbox(true);
  };

  return (
    <div>
      {showTextbox ? (
        <Textbox />
      ) : (
        <>
          <Options />
          <button 
            className="my-custom-button" 
            onClick={handleClick}
          >
            Show Textbox
          </button>
        </>
      )}
    </div>
  );
};

export default Editor;

// const AddCommand = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClick = () => {
//     setIsVisible(false);
//   };

// const Editor = () => {
//   const [showTextbox,setShowTextbox] = useState(true);
//     const handleClick = () => {
//       setShowTextbox(true);
//     };
//  return (
//     <div  className="container">
//       {!showTextbox && (
//         <>
//           <Options />
//           <button 
//             className="button-left" 
//             onClick={handleClick}
//           >
//             Add your Own command
//           </button>
//         </>
//         <div className="button-container-right">
//         <button className="button">Previous</button>
//         <button className="button">Next</button>
//       </div>
//       )}
//       {showTextbox && <Textbox />}
    
//   );
// };

// export default Editor;