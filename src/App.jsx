// UseState
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default App;
