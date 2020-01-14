import React from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants";

const Settings = () => {
  const [{ layout }] = useStateValue();
  
  return (
    <div className="settings">
      {console.log('layout from settings', layout)}
      {getActiveEl(layout).ElSettings}
    </div>
  );
};

export default Settings;
