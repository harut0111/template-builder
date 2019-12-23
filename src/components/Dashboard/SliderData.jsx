import React from "react";

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

export default SliderData;
