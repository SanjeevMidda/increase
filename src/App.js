import "./index.css";
import Number from "./components/Number";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState({
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
  });

  let everySecond = () => {
    setNumber({
      ...number,
      number1: number.number1 + 1,
      number2: number.number2 + 1,
      number3: number.number3 + 1,
      number4: number.number4 + 1,
    });
  };

  let newInterval = setInterval(everySecond, 1000);

  if (number.number1 === 5) {
    clearInterval(newInterval);
  }

  return (
    <div className="App">
      <div className="left">
        <Number number={number.number1} />
        <Number number={number.number3} />
      </div>
      <div className="middle">
        <h1
          onClick={() =>
            setNumber({
              ...number,
              number1: number.number1 + 1,
              number2: number.number2 + 1,
              number3: number.number3 + 1,
              number4: number.number4 + 1,
            })
          }
        >
          P
        </h1>
      </div>
      <div className="left">
        <Number number={number.number2} />
        <Number number={number.number4} />
      </div>
    </div>
  );
}

export default App;
