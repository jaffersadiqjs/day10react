import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [name, setName] = useState('john');
  const [age, setAge] = useState(30);

  useEffect(() => {
    console.log(`Name changed to ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Age changed to ${age}`);
  }, [age]);

  return (
    <div>
        <h1>Task-5</h1>
      <h2>User Profile</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
    </div>
  );
};

export default UserProfile;
