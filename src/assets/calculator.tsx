import { useState } from "react";

function Calculator() {
  const [display, setdisplay] = useState("");

  const handleClick = (value: any) => {
    setdisplay(display + value);
  };

  const CalcResult = () => {
    try {
      const result = eval(display);
      setdisplay(result.toString());
    } catch (error) {
      setdisplay("Error");
    }
  };
  const cleardisplay = () => {
    setdisplay("");
  };
  return (
    <>
      {" "}
      <div>
        <input type="text" value={display} />
      </div>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
      </div>
      <div>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => CalcResult()}>=</button>
        <button onClick={() => cleardisplay()}>C</button>
      </div>
      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("%")}>%</button>
      </div>
    </>
  );
}
export default Calculator;
