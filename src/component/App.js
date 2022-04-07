import "./App.css";
import React from "react";
import ButtonPannel from "./ButtonPannel.js";
import Result from "./Result.js";
import { useState } from "react";

function App() {
  const [calcul, setCalcul] = useState([]);
  const [resultat, setResultat] = useState(0);

  const clickButton = (txt) => {
    if (!isNaN(txt)) {
      if (resultat === 0) {
        setResultat(txt);
      } else {
        setResultat(resultat + txt.toString());
      }
    } else if (txt === ".") {
      setResultat(resultat + txt.toString());
    } else if (txt === "AC") {
      setResultat(0);
      setCalcul([]);
    } else if (txt === "+/-") {
      setResultat(resultat * -1);
    } else if (txt === "%") {
      setResultat(resultat / 100);
    } else if (txt === "÷" || txt === "+" || txt === "-" || txt === "x") {
      setCalcul(calcul.push(resultat));
      setResultat(0);
      setCalcul(calcul.push(txt));
      console.log(calcul);
    } else if (txt === "=") {
      console.log(calcul);
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
