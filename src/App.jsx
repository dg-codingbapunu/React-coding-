// Simple counter

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <div>
        <button
          onClick={handleIncrement}
          style={{ margin: "5px", padding: "5px", borderRadius: "3px" }}
        >
          Increase
        </button>
        <button
          onClick={handleReset}
          style={{ margin: "5px", padding: "5px", borderRadius: "3px" }}
        >
          Reset
        </button>
        <button
          onClick={handledecrement}
          style={{ margin: "5px", padding: "5px", borderRadius: "3px" }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
