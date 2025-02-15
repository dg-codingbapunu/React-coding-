import React, { createContext } from "react";
import EmployData from "./EmployData";

export const LoginContext = createContext();
const App = () => {
  return (
    <LoginContext.Provider value={true}>
      <div>
        <EmployData />
      </div>
    </LoginContext.Provider>
  );
};

export default App;
