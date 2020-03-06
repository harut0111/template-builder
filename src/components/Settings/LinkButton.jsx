import React, { useRef } from "react";
import { BORDER_TYPE_LIST } from "../../configs/constants";
import { updateElState } from "../../context/actions";
import { useStateValue } from "../../context";
import { getActiveEl } from "../../utils/getActiveEl";
import {
  setBtnTextVal,
  setBtnColorVal,
  setUrlVal,
  setBgColorVal,
  setBorderTypeVal
} from "../../utils/setStateValues";

const LinkButton = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const btnTextRef = useRef(null);
  const btnColorRef = useRef(null);
  const urlRef = useRef(null);
  const bgColorRef = useRef(null);
  const borderTypeRef = useRef(null);

  const LBD = getActiveEl(layout).elData;

  const handleOnSetBtnTextChange = () => {
    dispatch(updateElState(setBtnTextVal(btnTextRef, els, activeElId)));
  };

  const handleOnBtnColorChange = () => {
    dispatch(updateElState(setBtnColorVal(btnColorRef, els, activeElId)));
  };

  const handleOnURLChange = () => {
    dispatch(updateElState(setUrlVal(urlRef, els, activeElId)));
  };

  const handleOnBgColorChange = () => {
    dispatch(updateElState(setBgColorVal(bgColorRef, els, activeElId)));
  };

  const handleOnBorderTypeChange = () => {
    dispatch(updateElState(setBorderTypeVal(borderTypeRef, els, activeElId)));
  };

  return (
    <div className="link-button">
      <h3>Link/Button</h3>
      <form>
        <div className="link-button-row-1">
          <input
            type="text"
            placeholder="Button Text"
            value={LBD.btnText}
            onChange={handleOnSetBtnTextChange}
            ref={btnTextRef}
          />
          <input
            type="color"
            value={LBD.btnColor}
            onChange={handleOnBtnColorChange}
            ref={btnColorRef}
          />
        </div>
        <div className="link-button-row-2">
          <input
            type="url"
            placeholder="URL"
            required
            onChange={handleOnURLChange}
            ref={urlRef}
            defaultValue={LBD.url.value}
            style={{ borderBottomColor: LBD.url.validity ? "#ddd" : "red" }}
          />
        </div>

        <div className="link-button-row-3">
          <label>Background Color: </label>
          <input
            type="color"
            value={LBD.bgColor}
            onChange={handleOnBgColorChange}
            ref={bgColorRef}
          />
          <select
            value={LBD.borderType}
            onChange={handleOnBorderTypeChange}
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
