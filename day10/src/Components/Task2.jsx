import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return (
    <div>
      <h1>Task-2</h1>
      <h2>Basic useEffect Example</h2>
    </div>
  );
};

export default Component;
