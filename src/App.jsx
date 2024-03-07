
import React, { useState } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };
  return (
    <>
    <div className='container' style={{ backgroundColor: bgColor }} >

       <h1 style={{fontSize:'40px'}}>Background Color Change</h1>

      <div  style={{display:'flex',justifyContent:'center' , }}>
      <button onClick={() => changeBackgroundColor('#FFFF00')}>Yellow</button>
      <button onClick={() => changeBackgroundColor('#A020F0')}>purple</button>
      <button onClick={() => changeBackgroundColor('#964B00')}>Brown</button>
      <button onClick={() => changeBackgroundColor('#F33A6A')}>Rose</button>
      <button onClick={() => changeBackgroundColor('#808080')}>Grey</button>
      </div>
    </div>



    </>
  )
}

export default App
