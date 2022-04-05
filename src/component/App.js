import './App.css';
import React from 'react';
import ButtonPannel from './ButtonPannel.js'
import Result from './Result.js'

function App() {
  
  let nb1 = 0;
  let calcul = '';
  let nb2;

  const clickButton = (txt) => {
    console.log(txt)
  }
  return (
    <div className="App">
      <Result/>
      <ButtonPannel clickButton={clickButton}/>
    </div>
  );
}

export default App;
