import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <>
   
    <div>
        
      <h2>My Component</h2>
    </div>
    </>
  );
};


export default MyComponent;
