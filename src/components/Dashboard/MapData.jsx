import React from "react";

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

export default MapData;
