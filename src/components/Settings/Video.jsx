import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants";

const Video = () => {
  const [{ layout }, dispatch] = useStateValue();

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
    <div className="videoSettings">
      <h3>Video</h3>
      <input
        type="number"
        value={getActiveEl(layout).elData || ''}
        onChange={ev => handleOnChange(ev.target.value)}
      />
    </div>
  );
};

export default Video;
