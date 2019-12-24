import React, { useEffect, useRef } from "react";
import uuid from "uuid";

import { BORDER_TYPE_LIST } from "../Constants";
import { UPDATE_ELEMENT } from "../../context/actions";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants/";

const LinkButton = () => {
  const [{ layout }, dispatch] = useStateValue();

  // const [btnText, setBtnText] = useState("");
  // const [btnColor, setBtnColor] = useState("#ffffff");

  // const [url, setUrl] = useState("");

  // const [bgColor, setBgColor] = useState("#000000");
  // const [borderType, setBorderType] = useState("solid");

  const btnTextRef = useRef(null);
  const btnColorRef = useRef(null);
  const urlRef = useRef(null);
  const bgColorRef = useRef(null);
  const borderTypeRef = useRef(null);

  //   console.log("btnColor", btnColor);
  //   console.log("bgColor", bgColor);
  //   console.log("borderType", borderType);

  const LBD = getActiveEl(layout).elData;
  console.log("LBD", LBD);

  // useEffect(() => {
  //   if (LBD) {
  //     setBtnText(LBD.btnText);
  //     setBtnColor(LBD.btnColor);
  //     setUrl(LBD.url);
  //     setBgColor(LBD.bgColor)
  //     setBorderType(LBD.borderType)
  //   } else {
  //     setBtnText("");
  //     setBtnColor("#ffffff");
  //     setUrl("");
  //     setBgColor("#000000")
  //     setBorderType("solid")
  //   }
  // }, [LBD]);

  const handleOnChange = () => {
    // ev.preventDefault();

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
            // value={btnText}
            // onChange={e => setBtnText(e.target.value)}
            // value={LBD ? LBD.btnText: ""}
            // onChange={handleOnChange}
            defaultValue={LBD ? LBD.btnText : ""}
            ref={btnTextRef}
          />
          <input
            type="color"
            // value={btnColor}
            // onChange={e => setBtnColor(e.target.value)}
            // value={LBD ? LBD.btnColor: "#ffffff"}
            defaultValue={LBD ? LBD.btnColor : "#ffffff"}
            onChange={handleOnChange}
            ref={btnColorRef}
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="URL"
            // value={url}
            // onChange={e => setUrl(e.target.value)}
            // value={LBD ? LBD.url: ""}
            // onChange={handleOnChange}
            required
            defaultValue={LBD ? LBD.url : ""}
            ref={urlRef}
          />
        </div>

        <div>
          <label>Background Color: </label>
          <input
            type="color"
            // value={bgColor}
            // onChange={e => setBgColor(e.target.value)}
            // value={LBD ? LBD.bgColor: "#000000"}
            // onChange={handleOnChange}
            defaultValue={LBD ? LBD.bgColor : "#000000"}
            ref={bgColorRef}
          />
          <select
            // value={borderType}
            // onChange={e => setBorderType(e.target.value)}
            // value={LBD ? LBD.borderType: "solid"}
            // onChange={handleOnChange}
            defaultValue={LBD ? LBD.borderType : "solid"}
            ref={borderTypeRef}
          >
            {BORDER_TYPE_LIST.map(value => (
              <option key={uuid.v4()} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        {/* <input type="submit" value="Ok" /> */}
      </form>
    </div>
  );
};

export default LinkButton;
