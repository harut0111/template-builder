import React from "react";
import { areEqual } from "../../core/Comparision";

const ImageData = ({ elData, active }) => {
  console.log("elData", elData);

  const emptyDivStyle = {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div className={`imageData element ${active ? "element-active" : ""}`}>
      <div>
        {elData ? (
          <a
            href={elData.url}
            target="_blank"
            onClick={elData.url ? null : e => e.preventDefault()}
            rel="noopener noreferrer"
            
          >
            <img
              src={elData.imgSrc}
              width="150"
              height="150"
              alt="img"
              // style={{ transform: `rotate(${elData.deg}deg)` }}
            />
          </a>
        ) : <div style={emptyDivStyle}>Choose image from assets</div>}
      </div>
    </div>
  );
};

export default React.memo(ImageData, (p, n) => areEqual(p, n));
