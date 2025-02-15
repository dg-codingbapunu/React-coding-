// useRef

import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []); // if use useState it in infinite loop

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>name:{name}</h2>
      <h2>renders:{count.current}</h2>
    </>
  );
};

export default App;
