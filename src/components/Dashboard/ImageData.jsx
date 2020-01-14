import React from "react";
import { areEqual } from "../../core/Comparision";

const ImageData = ({ elData, active }) => {
  return (
    <div className={`imageData element ${active ? "element-active" : ""}`}>
      <div>
        {elData ? (
          <img
            src={elData.imgSrc}
            width="150"
            height="150"
            alt="img"
            style={{ transform: `rotate(45deg)` }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default React.memo(ImageData, (p, n) => areEqual(p, n));
