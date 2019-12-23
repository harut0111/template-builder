import React from "react";

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

export default SocialMediaData;
