import React from "react";
import Dashboard from "../Dashboard";
import Menu from "../Menu";
import { useStateValue } from "../../context";

const Main = () => {
  const state = useStateValue()[0];

  React.useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className="main">
      <Dashboard />
      <Menu />
    </div>
  );
};

export default Main;
