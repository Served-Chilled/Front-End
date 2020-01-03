import React, {useState, useEffect} from 'react';
import {styledApp, styledTime, } from './Styles';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  function toggle() {
    setIsActive(!isActive);
  }
  
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  return (
    <styledApp>
      <styledTime>
        {seconds}s
      </styledTime>
      
      <div className = "row">
        <button className = {`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        
        <button className = "button" onClick = {reset}>
          Reset
        </button>
      </div>
      
      
    </styledApp>
  );
};

export default Timer;