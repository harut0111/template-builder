import React from "react";
import TextSettings from "./Text";
import VideoSettings from "./Video";
import { useStateValue } from "../../context";
import uuid from "uuid";

const Settings = () => {
  const [{ layout }, dispatch] = useStateValue();

  const settingsList = [TextSettings, VideoSettings];

  // console.log('layout from settings', layout);
  console.log("layout.activeEl.label", layout.activeEl.label);

  return (
    <div className="settings">
      {layout.elements.map(item =>
        layout.activeEl.label === item.elLabel ? (
          <div key={uuid}>
            {item.ElSettings}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Settings;
