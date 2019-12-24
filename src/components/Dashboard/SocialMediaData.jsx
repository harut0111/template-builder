import React from "react";
import { areEqual } from "../../core/Comparision";

const SocialMediaData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
      //   className="socialMediaData"
    >
      <p>Social Media Data</p>
      <div>{elData}</div>
    </div>
  );
};

export default React.memo(SocialMediaData, (p, n) => areEqual(p, n));
