import React, { useState } from 'react'
import './App.css';
import {Child} from './components/Child';
function App() {
  const [colors,setColors] = useState('');
  const changeColor = (color) =>{
    setColors(color)
  }
  return (
    <div className="App">
      <h1>hello World</h1>
      <h3>The color in parent component is {colors}</h3>
      <Child changeColor={changeColor}/>
    </div>
  );
}

export default App;
