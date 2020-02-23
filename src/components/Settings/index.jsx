import React from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../../utils/getActiveEl";
import { EL_SETS_LIST } from "../../configs/constants";

const Settings = () => {
  
  const [{ layout }] = useStateValue();
  const activeElLabel = getActiveEl(layout).elLabel;
  const ActiveElSets = EL_SETS_LIST.filter(
    item => item.label === activeElLabel
  )[0].Sets;

  return (
    <div className="settings">
      <ActiveElSets />
    </div>
  );
};

export default Settings;
