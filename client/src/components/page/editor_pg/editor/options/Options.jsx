import './options.css'

const ButtonList = ({ items }) => {
  return (
    <div>
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
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className='options'>
      <h1>List of Buttons</h1>
      <ButtonList items={items} />
    </div>
  );
};

export default Options;