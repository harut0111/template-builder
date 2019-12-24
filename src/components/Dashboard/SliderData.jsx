import React from "react";
import { areEqual } from "../../core/Comparision";

const SliderData = ({ elData,active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
    //   className="sliderData"
    >
      <p>Slider Data</p>
      <div>{elData}</div>
    </div>
  );
};

export default React.memo(SliderData, (p, n) => areEqual(p, n));
