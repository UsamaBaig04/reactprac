import React, { useState } from 'react'

export const Child = ({changeColor}) => {
    const [color,setColor] = useState('');
    const changeColors = () =>{
        changeColor('red')
        setColor('orange')
    }
  return (
    <div>
        <h1>this is child </h1>
        <button onClick={changeColors}>Change Color</button>
        <h4>this is the color in child component: {color}</h4>
    </div>
  )
}
