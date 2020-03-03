import React, { useRef } from "react";
import { BORDER_TYPE_LIST } from "../../configs/constants";
import { updateElementData } from '../../utils/updateElData'
import { updateElState } from "../../context/actions";
import { useStateValue } from "../../context";
import { getActiveEl } from "../../utils/getActiveEl";

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

  const handleOnChange = () => {
    const btnText = btnTextRef.current.value;
    const btnColor = btnColorRef.current.value;
    const url = urlRef.current.value.trim();
    const bgColor = bgColorRef.current.value;
    const borderType = borderTypeRef.current.value;

    const elements = updateElementData(els, activeElId, {
      btnText,
      btnColor,
      url,
      bgColor,
      borderType
    });
    dispatch(updateElState(elements));
  };

  return (
    <div className="Link_Button">
      <h3>Link/Button</h3>
      <form>
        <div>
          <input
            type="text"
            placeholder="Button Text"
            value={LBD.btnText}
            onChange={handleOnChange}
            ref={btnTextRef}
          />
          <input
            type="color"
            value={LBD.btnColor}
            onChange={handleOnChange}
            ref={btnColorRef}
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="URL"
            required
            value={LBD.url}
            onChange={handleOnChange}
            ref={urlRef}
          />
        </div>

        <div>
          <label>Background Color: </label>
          <input
            type="color"
            value={LBD.bgColor}
            onChange={handleOnChange}
            ref={bgColorRef}
          />
          <select
            value={LBD.borderType}
            onChange={handleOnChange}
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
