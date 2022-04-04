import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './ButtonPannel.css'
function ButtonPannel() {
  return (
    <div className="button-pannel">
      <div className="btn-group d-block" role="group">
        <button type="button" className="btn btn-light w-25 border-dark">
          AC
        </button>
        <button type="button" className="btn btn-light w-25 border-dark">
          +/-
        </button>
        <button type="button" className="btn btn-light w-25 border-dark">
          %
        </button>
        <button type="button" className="btn btn-warning w-25 border-dark">
          ÷
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" className="btn btn-secondary w-25 border-dark">
          7
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          8
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          9
        </button>
        <button type="button" className="btn btn-warning w-25 border-dark">
          X
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" className="btn btn-secondary w-25 border-dark">
          4
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          5
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          6
        </button>
        <button type="button" className="btn btn-warning w-25 border-dark">
          -
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" className="btn btn-secondary w-25 border-dark">
          1
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          2
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          3
        </button>
        <button type="button" className="btn btn-warning w-25 border-dark">
          +
        </button>
      </div>
      <div className="btn-group d-block" role="group">
        <button type="button" className="btn btn-secondary w-50 border-dark">
          0
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          ,
        </button>
        <button type="button" className="btn btn-secondary w-25 border-dark">
          =
        </button>
      </div>
      
    </div>
  );
}

export default ButtonPannel;
