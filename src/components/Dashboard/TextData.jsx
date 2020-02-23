import React from "react";
import { areEqual } from "../../utils/comparision";

const TextData = ({ elData, active }) => {
  if (elData) {
    return (
      <div className={`textData element ${active ? "element-active" : ""}`}>
        {elData.toString("html") !== "<p><br></p>" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: elData && elData.toString("html")
            }}
          />
        ) : (
          <p>Type some text...</p>
        )}
      </div>
    );
  }
  return null;
};

export default React.memo(TextData, (p, n) => areEqual(p, n));
