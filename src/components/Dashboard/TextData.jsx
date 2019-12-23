import React from "react";
import { areEqual } from "../../core/Comparision";

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

export default React.memo(TextData, (p, n) => areEqual(p, n));
