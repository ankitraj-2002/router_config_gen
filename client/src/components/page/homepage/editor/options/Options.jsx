import './options.css';
import axios from 'axios';
import {useEffect,useState } from 'react';


//Available command options::
const Options = ({onAppendText}) => {
const [CommandList,setCommandList] = useState([]);
const [NextCommand,setNextCommand] = useState("BaseCommands");


console.log(NextCommand);
  useEffect(() =>{
    axios.get(`http://localhost:3001/${NextCommand}`).then((response) =>{
      setCommandList(response.data);
      // console.log(CommandList);
    })

  },[NextCommand]);

  const onbuttonclick = (item)=> {
    if(item[2]){
      <input placeholder={item[1]+item[2]}></input>
    }
    onAppendText(item[1]);
    if(item[3]){
      setNextCommand(item[3]);
      // console.log(NextCommand);
    }
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
  console.log(items);
  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
    </div>
  );
};

export default Options;


