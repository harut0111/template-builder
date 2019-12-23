import React, { useRef } from "react";
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

  // const memoizedCallback = useCallback(handleOnChange, [
  //   borderType,
  //   borderWidth,
  //   borderColor
  // ]);

  // useEffect(() => {
  //   memoizedCallback();
  // }, [memoizedCallback]);

  // console.log("DD", DD);

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

  const DD = getActiveEl(layout).elData;

  return (
    <div className="Divider">
      <h3>DIVIDER{Math.random()}</h3>
      <form>
        <select
          value={DD ? DD.borderType : "solid"}
          // onChange={e => setBorderType(e.target.value)}
          onChange={handleOnChange}
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
            value={DD ? +DD.borderWidth : "1"}
            // onChange={e => setBorderWidth(String(e.target.value))}
            onChange={handleOnChange}
            ref={borderWidthRef}
          />
          <span>px</span>
        </div>
        <input
          type="color"
          value={DD ? DD.borderColor : "#000000"}
          // onChange={e => setBorderColor(e.target.value)}
          onChange={handleOnChange}
          ref={borderColorRef}
        />
      </form>
    </div>
  );
};

export default Divider;
