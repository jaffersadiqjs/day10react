import React, { useState, useEffect } from 'react';


const Task9 = () => {
  const [inputValue, setInputValue] = useState("");

 useEffect(() => {
  const timeout = setTimeout(() => {
    console.log("Input value changed:", inputValue);
  }, 500); 

  return () => clearTimeout(timeout); 
}, [inputValue]);

  return (
    <div className="input">
      <h2> Log the value of an input field whenever it changes
using useEffect.</h2>
<hr />
      <h2 className="dis">Type something:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Task9;