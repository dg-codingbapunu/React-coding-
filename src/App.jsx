import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>COUNTER:{count}</h1>

      <button onClick={Increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default App;
