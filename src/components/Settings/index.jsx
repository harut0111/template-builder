import React from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants";

const Settings = () => {
  const [{ layout }] = useStateValue();
  
  return (
    <div className="settings">
      {getActiveEl(layout).ElSettings}
    </div>
  );
};

export default Settings;
