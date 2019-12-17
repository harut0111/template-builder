import React, { useState } from "react";
// import { useStateValue } from "../../context";

// import { UPDATE_ELEMENT } from "../../context/actions";
// import { getActiveEl } from "../Constants";
import uuid from "uuid";
import { OPTION_LIST, CHECKBOX_LIST } from "../Constants";

const Video = () => {
  // const [{ layout }, dispatch] = useStateValue();

  const [optionVal, setOptionVal] = useState(OPTION_LIST[0]);
  const [checkboxVal, setCheckboxVal] = useState({
    autoplay: false,
    loop: false,
    control: false
  });

  // const handleOnChange = val => {
  //   const elements = [...layout.elements];
  //   elements.forEach((element, i) => {
  //     if (element.elId === layout.activeEl.id) {
  //       elements[i].elData = val;
  //     }
  //   });
  //   dispatch({ type: UPDATE_ELEMENT, payload: elements });
  // };

  const handleCheckboxChange = e => {
    setCheckboxVal({
      ...checkboxVal,
      [e.target.name]: !checkboxVal[e.target.name]
    });
  };

  return (
    <div className="videoSettings">
      <h3>Video</h3>
      <form>
        <div>
          <label>Provider: </label>
          <select
            value={optionVal}
            onChange={e => setOptionVal(e.target.value)}
          >
            {OPTION_LIST.map(val => (
              <option key={uuid.v4()} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Source: </label>
          <input placeholder="URL" />
        </div>
        <div>
          {CHECKBOX_LIST.map(item => (
            <span key={uuid.v4()}>
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                checked={checkboxVal[item.name]}
                onChange={handleCheckboxChange}
              />
            </span>
          ))}
        </div>
      </form>
      {/* <input
        type="number"
        value={getActiveEl(layout).elData || ""}
        onChange={ev => handleOnChange(ev.target.value)}
      /> */}
    </div>
  );
};

export default Video;
