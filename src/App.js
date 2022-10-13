import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  const [toggle, setToggle] = useState(true);

  const sizeChangeHandler = () => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', sizeChangeHandler);

    return () => {
      window.removeEventListener('resize', sizeChangeHandler);
    };
  }, [width, height]);

  const toggleHandler = () => {
    setToggle((toggle) => !toggle);
  };

  if (toggle) {
    return (
      <div className="App">
        <h1>The inner width of the window is: {width}</h1>
        <h1>The inner height of the window is: {height}</h1>
        <button onClick={toggleHandler}>Remove/Add Component</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button onClick={toggleHandler}>Remove/Add Component</button>
      </div>
    );
  }
}

export default App;
