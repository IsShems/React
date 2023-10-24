import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [inputSeconds, setInputSeconds] = useState(60);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(inputSeconds);
    setIsActive(false);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputSeconds(inputValue);
  };

  useEffect(() => {
    let timer;

    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds, isActive]);

  return (
    <div>
      <p>Осталось {seconds} секунд</p>
      <div>
        <input
          type="number"
          value={inputSeconds}
          onChange={handleInputChange}
          min="1"
        />
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
