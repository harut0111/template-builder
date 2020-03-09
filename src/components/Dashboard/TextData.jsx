import React from "react";
import { areEqual } from "../../utils/comparision";

const TextData = ({ elData }) => {
  return (
    <div className="textData">
      <div className="textData-container" dangerouslySetInnerHTML={{ __html: elData.markup }} />
    </div>
  );
};

export default React.memo(TextData, (p, n) => areEqual(p, n));
