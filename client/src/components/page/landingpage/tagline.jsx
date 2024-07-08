import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './tagline.css'; // Create this CSS file for custom styles

const Typewriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    }else if(index === text.length){
      setTimeout(() =>{
        setIndex((prev) => prev+1);
      }, 2500)
    } else {
      // Reset to loop the text
      timeout = setTimeout(() => {
        setDisplayedText(' ');
        setIndex(0);
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return <div className="typewriter">{displayedText}</div>;
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

Typewriter.defaultProps = {
  speed: 100,
};

export default Typewriter;
