import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const Video = () => {
  const [{ layout }, dispatch] = useStateValue();

  const getActiveEl = layout => {
    const filteredItem = layout.elements.filter(
      el => el.elId === layout.activeEl.id
    );
    return filteredItem[0];
  };



  const handleOnChange = val => {
    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = val;
      }
    });

    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  return (
    <div className="video">
      VideoSettings
      <input
        type="number"
        value={getActiveEl(layout).elData || ''}
        onChange={ev => handleOnChange(ev.target.value)}
      />
    </div>
  );
};

export default Video;
