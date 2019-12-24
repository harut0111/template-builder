import React from "react";
import { areEqual } from "../../core/Comparision";

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

export default React.memo(ImageData, (p, n) => areEqual(p, n));

