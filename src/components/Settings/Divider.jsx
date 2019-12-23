import React, { useState, useEffect, useCallback } from "react";
import uuid from "uuid";

import { BORDER_TYPE_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const Divider = () => {
  const [{ layout }, dispatch] = useStateValue();

  const [borderType, setBorderType] = useState("solid");
  const [borderWidth, setBorderWidth] = useState("1");
  const [borderColor, setBorderColor] = useState("#000000");

  const handleOnChange = ev => {
    // ev.preventDefault();
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

  const memoizedCallback = useCallback(handleOnChange, [
    borderType,
    borderWidth,
    borderColor
  ]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  const DD = getActiveEl(layout).elData;
  console.log('DD', DD);

  // const memoizedLocalStateUpdate = useCallback(() => {
  //   if (DD) {
  //     setBorderType(DD.borderType);
  //     setBorderWidth(DD.borderWidth);
  //     setBorderColor(DD.borderColor);
  //   }
  // }, [DD]);

  // useEffect(() => {
  //   memoizedLocalStateUpdate();
  // }, [memoizedLocalStateUpdate]);

  return (
    <div className="Divider">
      <h3>DIVIDER{Math.random()}</h3>
      <form>
      <select 
        value={DD ? DD.borderType: "solid"} 
        // onChange={e => setBorderType(e.target.value)}
        onChange={handleOnChange}
        >
        {BORDER_TYPE_LIST.map(value => (
          <option key={uuid.v4()} value={value}>
            {value}
          </option>
        ))}
      </select>
        <div>
          <input
            type="number"
            value={DD ? +DD.borderWidth: "1" }
            // onChange={e => setBorderWidth(String(e.target.value))}
            onChange={handleOnChange}
          />
          <span>px</span>
        </div>
        <input
          type="color"
          value={DD ? DD.borderColor: "#000000"  }
          // onChange={e => setBorderColor(e.target.value)}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default Divider;
