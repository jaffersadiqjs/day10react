import React, { useState, useEffect } from 'react';

const Task7 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Fetching Data...');
    const fetchData = async () => {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: 'Sample Data' });
        }, 2000);
      });
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>API Data Fetching Simulation</h2>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Task7;
