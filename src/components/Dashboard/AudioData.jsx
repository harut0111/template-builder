import React from "react";

const AudioData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
    //   className="audioData"
    >
      <p>Audio Data</p>
      <div>{elData}</div>
    </div>
  );
};

export default AudioData;
