import React from "react";
import { areEqual } from "../../core/Comparision";

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
          "type some text"
        )}
      </div>
    );
  }
  return null;
};

export default React.memo(TextData, (p, n) => areEqual(p, n));
