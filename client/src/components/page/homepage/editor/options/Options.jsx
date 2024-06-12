

import './options.css';
import axios from 'axios';
import {useEffect,useState } from 'react';



//Available command options::
const Options = ({onAppendText}) => {

// const Options = ({onAppendText}) => {

const [CommandList,setCommandList] = useState([]);
const [basecommand, setBasecommand] = useState("BaseCommands");

  useEffect(() =>{
    axios.get(`http://localhost:3001/${basecommand}`).then((response) =>{
      setCommandList(response.data);
      console.log(CommandList);
    })
  },[]);

  const onbuttonclick = (item)=> {
    onAppendText(item[1]);
    
    setBasecommand(item[3]);
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
    items.push([ele.id,ele.BaseCommand,ele.UI_enabled,ele.NextTable]);
  })
  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
    </div>
  );
};

export default Options;


