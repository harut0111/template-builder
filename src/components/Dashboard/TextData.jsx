import React from "react";

const TextData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
    //   className="textData"
    >
      <div
        dangerouslySetInnerHTML={{ __html: elData && elData.toString("html") }}
      />
    </div>
  );
};

export default TextData;
