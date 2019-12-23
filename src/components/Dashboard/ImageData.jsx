import React from "react";

const ImageData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
    //   className="imageData"
    >
      <p>Image Data</p>
      <div>{elData}</div>
    </div>
  );
};

export default ImageData;
