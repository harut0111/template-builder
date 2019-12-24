import React from "react";
import { areEqual } from "../../core/Comparision";

const MapData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
    //   className="mapData"
    >
      <p>Map Data</p>
      {elData}
    </div>
  );
};

export default React.memo(MapData, (p, n) => areEqual(p, n));

