import React from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants";

const Settings = () => {
  const [{ layout }] = useStateValue();


  console.log('layout from settings', layout);

  return (
    <div className="settings">
      {/* {layout.elements.map(item =>
        layout.activeEl.label === item.elLabel ? (
          <div key={uuid.v4()}>
            {filteredItem.ElSettings}
          </div>
        ) : null
      )} */}
      {getActiveEl(layout).ElSettings}
    </div>
  );
};

export default Settings;
