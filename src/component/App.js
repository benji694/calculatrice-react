import "./App.css";
import React from "react";
import ButtonPannel from "./ButtonPannel.js";
import Result from "./Result.js";
import { useState } from "react";

function App() {
  let [nb1, setNb1] = useState(0);
  let calcul = "";
  let nb2;
  let [resultat, setResultat] = useState(0);

  const clickButton = (txt) => {
    if (calcul === "") {
      if (Number.isInteger(txt)) {
        if (nb1 === 0) {
          setNb1(txt);
        } else {
          setNb1(parseFloat(nb1 + txt.toString()));
        }
        setResultat(nb1);
        console.log(nb1);
      } else if (txt === ".") {
        if (nb1.toString().includes(txt)) {
          return false;
        } else{
          setNb1(nb1.toString() + txt);
        }
      }
    }
  };

  return (
    <div className="App">
      <Result result={resultat} />
      <ButtonPannel clickButton={clickButton} />
    </div>
  );
}

export default App;
