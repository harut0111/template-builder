import React, { useEffect, useRef } from "react";
import uuid from "uuid";

import { BORDER_TYPE_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const Divider = () => {
  const [{ layout }, dispatch] = useStateValue();

  // const [borderType, setBorderType] = useState("solid");
  // const [borderWidth, setBorderWidth] = useState("1");
  // const [borderColor, setBorderColor] = useState("#000000");

  const borderTypeRef = useRef(null);
  const borderWidthRef = useRef(null);
  const borderColorRef = useRef(null);

  const handleOnChange = () => {
    const borderType = borderTypeRef.current.value;
    const borderWidth = borderWidthRef.current.value;
    const borderColor = borderColorRef.current.value;

    const elements = [...layout.elements];

    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          borderType,
          borderWidth,
          borderColor
        };
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(handleOnChange, []);

  const DD = getActiveEl(layout).elData;

  return (
    <div className="Divider">
      <h3>DIVIDER</h3>
      <form onChange={handleOnChange}>
        <select defaultValue={DD ? DD.borderType : "solid"} ref={borderTypeRef}>
          {BORDER_TYPE_LIST.map(value => (
            <option key={uuid.v4()} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div>
          <input
            type="number"
            defaultValue={DD ? +DD.borderWidth : "1"}
            ref={borderWidthRef}
          />
          <span>px</span>
        </div>
        <input
          type="color"
          defaultValue={DD ? DD.borderColor : "#000000"}
          ref={borderColorRef}
        />
      </form>
    </div>
  );
};

export default Divider;
