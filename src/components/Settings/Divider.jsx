import React, { useRef } from "react";
import uuid from "uuid";

import { BORDER_TYPE_LIST } from "../../configs/constants";
import { getActiveEl } from "../../utils/getActiveEl";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import {
  setBorderTypeVal,
  setBorderWidthVal,
  setBorderColorVal
} from "../../utils/setStateValues";

const Divider = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const [borderTypeRef, borderWidthRef, borderColorRef] = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const DD = getActiveEl(layout).elData;

  const handleOnBorderTypeChange = () => {
    dispatch(updateElState(setBorderTypeVal(borderTypeRef, els, activeElId)));
  };

  const handleOnBorderWidthChange = () => {
    dispatch(updateElState(setBorderWidthVal(borderWidthRef, els, activeElId)));
  };

  const handleOnBorderColorChange = () => {
    dispatch(updateElState(setBorderColorVal(borderColorRef, els, activeElId)));
  };

  return (
    <div className="divider">
      <h3>DIVIDER</h3>
      <form>
        <select
          onChange={handleOnBorderTypeChange}
          value={DD.borderType}
          ref={borderTypeRef}
        >
          {BORDER_TYPE_LIST.map(value => (
            <option key={uuid.v4()} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
            type="number"
            onChange={handleOnBorderWidthChange}
            value={Number(DD.borderWidth)}
            ref={borderWidthRef}
          />
        <input
          type="color"
          onChange={handleOnBorderColorChange}
          value={DD.borderColor}
          ref={borderColorRef}
        />
      </form>
    </div>
  );
};

export default Divider;
