/*
import './options.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Options = ({ onAppendText, resetNextCommand }) => {
  const [CommandList, setCommandList] = useState([]);
  const [NextCommand, setNextCommand] = useState("BaseTable");
  const [showTextbox, setShowTextbox] = useState(false);
  const [textboxValue, setTextboxValue] = useState('');
  const [showTextboxValue, setShowTextboxValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${NextCommand}`);
        setCommandList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [NextCommand]);

  useEffect(() => {
    resetNextCommand.current = () => setNextCommand("BaseTable");
  }, [resetNextCommand]);

  const onButtonClick = (item) => {
    if(item[2] && item[3]){

    }
    else if(item[2]){

    }
    else{
      setNextCommand(item[3]);
      onAppendText(item[1]);
    }

    // if (item[2]) {
    //   setShowTextboxValue(item[2]);
    //   setShowTextbox(item[2] !== null);
    // }
  };

  // const handleTextboxChange = (event) => {
  //   setTextboxValue(event.target.value);
  // };

  // const handleTextboxSubmit = () => {
  //   onAppendText(textboxValue);
  //   setTextboxValue('');
  //   setShowTextbox(false);
  // };

  const ButtonList = ({ items }) => (
    <div className="button">
      {items.map((item, index) => (
        <button key={index} onClick={() => onButtonClick(item)}>
          {item[1]}
        </button>
      ))}
    </div>
  );

  let items = [];
  CommandList.forEach((ele) => {
    items.push([ele.id, ele.BaseCommand, ele.UI_enabled, ele.NextTable]);
  });

  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
      {/* {showTextbox && (
        <div>
          <input
            type="text"
            value={textboxValue}
            onChange={handleTextboxChange}
            placeholder={showTextboxValue}
          />
          <button onClick={handleTextboxSubmit}>Submit</button>
        </div>
      )} } // take care of t his line
    </div>
  );
};

export default Options;
*/
import './options.css';
import axios from 'axios';
import {useEffect,useState } from 'react';
import Display from '../../display/Display';


const Options = ({ onAppendText, resetNextCommand }) => {
  const [CommandList, setCommandList] = useState([]);
  const [NextCommand, setNextCommand] = useState("BaseTable");
  const [showTextbox, setShowTextbox] = useState(false);
  const [textboxValue, setTextboxValue] = useState('');
  const [showTextboxPlaceholder, setShowTextboxPlaceholder] = useState('');
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${NextCommand}`);
        setCommandList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [NextCommand]);

  useEffect(() => {
    resetNextCommand.current = () => setNextCommand("BaseTable");
  }, [resetNextCommand]);

  const onButtonClick = (item) => {
    setCurrentItem(item);
    if (item[2]) {
      setShowTextboxPlaceholder(item[2]);
      setShowTextbox(true);
    } else {
      setShowTextbox(false);
      onAppendText(item[1]);
      if (item[3]) {
        setNextCommand(item[3]);
      }
    }
  };

  const handleTextboxChange = (event) => {
    setTextboxValue(event.target.value);
  };

  const handleTextboxSubmit = () => {
    if (currentItem) {
      onAppendText(currentItem[1] + " " + textboxValue);
      setTextboxValue('');
      setShowTextbox(false);
      if (currentItem[3]) {
        setNextCommand(currentItem[3]);
      }
      setCurrentItem(null);
    }
  };

  const ButtonList = ({ items }) => (
    <div className="button">
      {items.map((item, index) => (
        <button key={index} onClick={() => onButtonClick(item)}>
          {item[1]}
        </button>
      ))}
    </div>
  );

  let items = [];
  CommandList.forEach((ele) => {
    items.push([ele.id, ele.BaseCommand, ele.UI_enabled, ele.NextTable]);
  });

  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
      {showTextbox && (
        <div>
          <input
            type="text"
            value={textboxValue}
            onChange={handleTextboxChange}
            placeholder={showTextboxPlaceholder}
          />
          <button onClick={handleTextboxSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Options;