import React, { useState, useEffect } from "react";
import uuid from "uuid";

import { BORDER_TYPE_LIST } from "../Constants";
import { UPDATE_ELEMENT } from "../../context/actions";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants/";

const LinkButton = () => {
  const [{ layout }, dispatch] = useStateValue();

  const [btnText, setBtnText] = useState("");
  const [btnColor, setBtnColor] = useState("#ffffff");

  const [url, setUrl] = useState("");

  const [bgColor, setBgColor] = useState("#000000");
  const [borderType, setBorderType] = useState("solid");

  //   console.log("btnColor", btnColor);
  //   console.log("bgColor", bgColor);
  //   console.log("borderType", borderType);

  const LBD = getActiveEl(layout).elData;

  useEffect(() => {
    if (LBD) {
      setBtnText(LBD.btnText);
      setBtnColor(LBD.btnColor);
      setUrl(LBD.url);
      setBgColor(LBD.bgColor)
      setBorderType(LBD.borderType)
    } else {
      setBtnText("");
      setBtnColor("#ffffff");
      setUrl("");
      setBgColor("#000000")
      setBorderType("solid")
    }
  }, [LBD]);

  const handleOnSubmit = ev => {
    ev.preventDefault();

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

  return (
    <div className="Link_Button">
      <h3>Link/Button</h3>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            placeholder="Button Text"
            value={btnText}
            onChange={e => setBtnText(e.target.value)}
          />
          <input
            type="color"
            value={btnColor}
            onChange={e => setBtnColor(e.target.value)}
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>

        <div>
          <label>Background Color: </label>
          <input
            type="color"
            value={bgColor}
            onChange={e => setBgColor(e.target.value)}
          />
          <select
            value={borderType}
            onChange={e => setBorderType(e.target.value)}
          >
            {BORDER_TYPE_LIST.map(value => (
              <option key={uuid.v4()} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Ok" />
      </form>
    </div>
  );
};

export default LinkButton;
