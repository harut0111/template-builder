import React, { useState, useEffect, useCallback } from "react";
import uuid from "uuid";
import { BORDER_TYPE_LIST } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const Divider = () => {
  const [{ layout }, dispatch] = useStateValue();

  const [borderType, setBorderType] = useState("solid");
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderColor, setBorderColor] = useState("#000000");


  const handleOnChange = () => {
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

  return (
    <div className="Divider">
      <h3>DIVIDER</h3>
      <select value={borderType} onChange={e => setBorderType(e.target.value)}>
        {BORDER_TYPE_LIST.map(value => (
          <option key={uuid.v4()} value={value}>
            {value}
          </option>
        ))}
      </select>
      <form>
        <div>
          <input
            type="number"
            min="0"
            value={borderWidth}
            onChange={e => setBorderWidth(e.target.value)}
          />
          <span>px</span>
        </div>
        <input
          type="color"
          value={borderColor}
          onChange={e => setBorderColor(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Divider;
