import React, { useRef } from "react";
import uuid from "uuid";

import { BORDER_TYPE_LIST } from "../../configs/constants";
import { getActiveEl } from "../../utils/getActiveEl";
import { updateElementData } from '../../utils/updateElData'
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";

const Divider = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const borderTypeRef = useRef(null);
  const borderWidthRef = useRef(null);
  const borderColorRef = useRef(null);

  const handleOnChange = () => {
    const borderType = borderTypeRef.current.value;
    const borderWidth = borderWidthRef.current.value;
    const borderColor = borderColorRef.current.value;

    const elements = updateElementData(els, activeElId, {
      borderType,
      borderWidth,
      borderColor
    });
    dispatch(updateElState(elements));
  };

  // useEffect(handleOnChange, []);
  
  const DD = getActiveEl(layout).elData;

  return (
    <div className="Divider">
      <h3>DIVIDER</h3>
      <form>
        <select
          onChange={handleOnChange}
          value={DD.borderType}
          ref={borderTypeRef}
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
            onChange={handleOnChange}
            value={+DD.borderWidth}
            ref={borderWidthRef}
          />
          <span>px</span>
        </div>
        <input
          type="color"
          onChange={handleOnChange}
          value={DD.borderColor}
          ref={borderColorRef}
        />
      </form>
    </div>
  );
};

export default Divider;
