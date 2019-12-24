import React from "react";
import { areEqual } from "../../core/Comparision";

const SocialMediaData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
      //   className="socialMediaData"
    >
      <h3>SOCIAL MEDIA</h3>
      <div>{elData}</div>
    </div>
  );
};

export default React.memo(SocialMediaData, (p, n) => areEqual(p, n));
