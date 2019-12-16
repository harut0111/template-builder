import React from "react";
import { useStateValue } from "../../context";
// import uuid from "uuid";

const Settings = () => {
  const [{ layout }] = useStateValue();


  console.log('layout from settings', layout);

  const getActiveEl = layout => {
    const filteredItem = layout.elements.filter(el => el.elId === layout.activeEl.id)
    return filteredItem[0];
  };

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
