import React from "react";
import { areEqual } from "../../core/Comparision";

const SocialMediaData = ({ elData, active }) => {
  if (elData) {
    return (
      <div
        className={`element ${active ? "element-active" : ""}`}
        //   className="socialMediaData"
      >
        <div>{JSON.stringify(elData)}</div>
      </div>
    );
  } 
  return null;
};

export default React.memo(SocialMediaData, (p, n) => areEqual(p, n));
