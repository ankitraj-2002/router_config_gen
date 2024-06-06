import './options.css';
import axios from 'axios';
import {useEffect,useState } from 'react';

const ButtonList = ({ items }) => {
  return (
    <div className = "button">
      {items.map((item, index) => (
        <button key={index} onClick={() => alert(`You clicked on ${item}`)}>
          {item}
        </button>
      ))}
    </div>
  );
};
// Example usage
const Options = () => {
  const [CommandList,setCommandList] = useState([]);
  useEffect(() =>{
    axios.get("http://localhost:3001/BaseCommands").then((response) =>{
      setCommandList(response.data);
    })
  })
  let items = [];
  CommandList.forEach((ele)=>{
    items.push(ele.BaseCommand);
  })

  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
    </div>
  );
};

export default Options;