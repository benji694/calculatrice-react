import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './ButtonPannel.css'
function ButtonPannel(props) {


  return (
    <div className="button-pannel">
      <div className="btn-group d-block" role="group">
        <button type="button" onClick={() => props.clickButton("AC")} className="btn btn-light w-25 border-dark">
        AC
        </button>
        <button type="button" onClick={() => props.clickButton("+/-")} className="btn btn-light w-25 border-dark">
          +/-
        </button>
        <button type="button" onClick={() => props.clickButton("%")} className="btn btn-light w-25 border-dark">
          %
        </button>
        <button type="button" onClick={() => props.clickButton("÷")} className="btn btn-warning w-25 border-dark">
          ÷
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" onClick={() => props.clickButton(7)} className="btn btn-secondary w-25 border-dark">
          7
        </button>
        <button type="button" onClick={() => props.clickButton(8)} className="btn btn-secondary w-25 border-dark">
          8
        </button>
        <button type="button" onClick={() => props.clickButton(9)} className="btn btn-secondary w-25 border-dark">
          9
        </button>
        <button type="button" onClick={() => props.clickButton('x')} className="btn btn-warning w-25 border-dark">
          X
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" onClick={() => props.clickButton(4)} className="btn btn-secondary w-25 border-dark">
          4
        </button>
        <button type="button" onClick={() => props.clickButton(5)} className="btn btn-secondary w-25 border-dark">
          5
        </button>
        <button type="button" onClick={() => props.clickButton(6)} className="btn btn-secondary w-25 border-dark">
          6
        </button>
        <button type="button" onClick={() => props.clickButton('-')} className="btn btn-warning w-25 border-dark">
          -
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" onClick={() => props.clickButton(1)} className="btn btn-secondary w-25 border-dark">
          1
        </button>
        <button type="button" onClick={() => props.clickButton(2)} className="btn btn-secondary w-25 border-dark">
          2
        </button>
        <button type="button" onClick={() => props.clickButton(3)} className="btn btn-secondary w-25 border-dark">
          3
        </button>
        <button type="button" onClick={() => props.clickButton('+')} className="btn btn-warning w-25 border-dark">
          +
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" onClick={() => props.clickButton(0)} className="btn btn-secondary w-50 border-dark">
          0
        </button>
        <button type="button" onClick={() => props.clickButton('.')} className="btn btn-secondary w-25 border-dark">
          ,
        </button>
        <button type="button" onClick={() => props.clickButton('=')} className="btn btn-secondary w-25 border-dark">
          =
        </button>
      </div>
      
    </div>
  );
}

export default ButtonPannel;
