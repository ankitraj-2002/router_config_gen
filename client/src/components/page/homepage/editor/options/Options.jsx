

import './options.css';
import axios from 'axios';
import {useEffect,useState } from 'react';
// import Display from '../../display/Display';


//Available command options::
const Options = ({onAppendText}) => {
const [CommandList,setCommandList] = useState([]);
// const [CommandString,setCommandString] = useState("");

  useEffect(() =>{
    axios.get("http://localhost:3001/BaseCommands").then((response) =>{
      setCommandList(response.data);
    })
  },[]);

  const onbuttonclick = (item)=> {
    // setCommandString(item[1]);
    onAppendText(item[1]);
  };
  const ButtonList= ({ items }) => {
    return (
      <div className = "button">
      {items.map((item, index) => (
        <button key={index} onClick={()=> onbuttonclick(item)}>
        {item[1]}
        </button>
      ))}
      </div>
    );
    };
  //items list will contain the command options that is going to be displayed; 
  let items = [];
  CommandList.forEach((ele)=>{
    items.push([ele.id,ele.BaseCommand]);
  })
  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
    </div>
  );
};

export default Options;


