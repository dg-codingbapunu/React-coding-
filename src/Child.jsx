import React, { useContext } from "react";
import { LoginContext } from "./App";
const Child = () => {
  const Login = useContext(LoginContext);
  console.log(Login);

  return <h2>Hello</h2>;
};

export default Child;
