import React, { useState, useEffect } from 'react';

const Task10 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count % 2 === 0) {
      setMessage('Counter is Even');
    } else {
      setMessage('Counter is Odd');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Task10;
