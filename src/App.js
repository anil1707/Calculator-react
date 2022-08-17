import React, { useState } from "react";
import "./style.css"; //  for styling
function App() {
  const [str, setStr] = useState("");
  function handleInput(e) {
    setStr(str.concat(e.target.value));
  }

  //  calculate expression
  function calculate(e) {
    let res = eval(str);
    setStr(res + "");
  }

  // clear all
  function clear() {
    setStr("");
  }

  //  functionality of backspace button
  function backspace(e) {
    setStr(str.slice(0, str.length - 1));
  }
  return (
    <div className="calc">
      <input type="text" placeholder="0" className="ans" value={str} />
      <input type="button" value="9" className="button" onClick={handleInput} />
      <input type="button" value="8" className="button" onClick={handleInput} />
      <input type="button" value="7" className="button" onClick={handleInput} />
      <input
        type="button"
        value="Del"
        className="button btn2 btnOp"
        onClick={backspace}
      />
      <input type="button" value="6" className="button" onClick={handleInput} />
      <input type="button" value="5" className="button" onClick={handleInput} />
      <input type="button" value="4" className="button" onClick={handleInput} />
      <input
        type="button"
        value="/"
        className="button btnOp"
        onClick={handleInput}
      />
      <input type="button" value="3" className="button" onClick={handleInput} />
      <input type="button" value="2" className="button" onClick={handleInput} />
      <input type="button" value="1" className="button" onClick={handleInput} />
      <input
        type="button"
        value="*"
        className="button btnOp"
        onClick={handleInput}
      />
      <input
        type="button"
        value="%"
        className="button btnOp"
        onClick={handleInput}
      />
      <input type="button" value="0" className="button" onClick={handleInput} />
      <input
        type="button"
        value="."
        className="button btnOp"
        onClick={handleInput}
      />
      <input
        type="button"
        value="="
        className="button btn1 btn3"
        onClick={calculate}
      />
      <input type="button" value="00" className="button" onClick={handleInput} />
      <input type="button" value="C" className="button btnOp" onClick={clear} />
      
      <input
        type="button"
        value="-"
        className="button btnOp"
        onClick={handleInput}
      />
      
      
      
      <input
        type="button"
        value="+"
        className="button btnOp"
        onClick={handleInput}
      />
      
      
    </div>
  );
}

export default App;
