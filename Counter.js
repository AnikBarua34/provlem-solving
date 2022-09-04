//   counter 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [counter,setCounter] = useState(0);

  // making increaser handler 
  const increase = () =>{
    setCounter(count => count + 1);
  };
  // making increaser handler 
  const decrease = () =>{
    setCounter(count => count - 1);
  };
  return (
    <div id="mainArea">
      <p>button count: <span>{counter}</span></p>
      <button id="mainButton" onClick={increase}>Increase</button>
      <button id="mainButton2" onClick={decrease}>Decrease</button>
    </div>
  );
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);