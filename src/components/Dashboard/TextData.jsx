import React from "react";
import { areEqual } from "../../core/Comparision";

const TextData = ({ elData, active }) => {
  if (elData) {
    return (
      <div
        className={`element ${active ? "element-active" : ""}`}
        //   className="textData"
      >
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
