import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    let intervalId;

    if (showTimer) {
      intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [showTimer]);

  return (
    <div>
      {showTimer && <p>Time: {time} seconds</p>}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
    </div>
  );
};

export default Timer;
