import React, { useEffect } from 'react';

const Components = () => {
  useEffect(() => {
    console.log('Component mounted successfully!');
  }, []);

  return (
    <div>
      <h1>Task-3</h1>
      <h2>Effect with Empty Dependency Array</h2>
    </div>
  );
};

export default Components;