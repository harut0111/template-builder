import React from "react";
import { areEqual } from "../../utils/comparision";

const TextData = ({ elData, active }) => {
  return (
    <div
      className="textData"
      // className={`textData element ${active ? "element-active" : ""}`}
    >
      <div dangerouslySetInnerHTML={{ __html: elData.markup }} />
    </div>
  );
};

export default React.memo(TextData, (p, n) => areEqual(p, n));
