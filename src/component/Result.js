import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Result.css";

function Result(props) {
  return (
    <div className="result">
      <h1>{props.result}</h1>
    </div>
  );
}

export default Result;
