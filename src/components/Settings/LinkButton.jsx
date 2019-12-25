import React, { useEffect, useRef } from "react";
import { BORDER_TYPE_LIST } from "../Constants";
import { UPDATE_ELEMENT } from "../../context/actions";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants/";

const LinkButton = () => {
  const [{ layout }, dispatch] = useStateValue();

  const btnTextRef = useRef(null);
  const btnColorRef = useRef(null);
  const urlRef = useRef(null);
  const bgColorRef = useRef(null);
  const borderTypeRef = useRef(null);

  const LBD = getActiveEl(layout).elData;

  const handleOnChange = () => {
    const btnText = btnTextRef.current.value;
    const btnColor = btnColorRef.current.value;
    const url = urlRef.current.value;
    const bgColor = bgColorRef.current.value;
    const borderType = borderTypeRef.current.value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          btnText,
          btnColor,
          url,
          bgColor,
          borderType
        };
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(handleOnChange, []);

  return (
    <div className="Link_Button">
      <h3>Link/Button</h3>
      <form onChange={handleOnChange}>
        <div>
          <input
            type="text"
            placeholder="Button Text"
            defaultValue={LBD ? LBD.btnText : ""}
            ref={btnTextRef}
          />
          <input
            type="color"
            defaultValue={LBD ? LBD.btnColor : "#ffffff"}
            onChange={handleOnChange}
            ref={btnColorRef}
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="URL"
            required
            defaultValue={LBD ? LBD.url : ""}
            ref={urlRef}
          />
        </div>

        <div>
          <label>Background Color: </label>
          <input
            type="color"
            defaultValue={LBD ? LBD.bgColor : "#000000"}
            ref={bgColorRef}
          />
          <select
            defaultValue={LBD ? LBD.borderType : "solid"}
            ref={borderTypeRef}
          >
            {BORDER_TYPE_LIST.map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default LinkButton;
