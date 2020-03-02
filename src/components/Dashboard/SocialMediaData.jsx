import React from "react";
import { areEqual } from "../../utils/comparision";
import { getSocialMediaIcon } from "../../utils/getSocialMediaIcon";

const SocialMediaData = ({ elData, active }) => {
  return (
    <div
      className="socialMediaData"
      // className={`socialMediaData element ${active ? "element-active" : ""}`}
    >
      <div>
        {elData.map((el, i) => (
          <a
            key={i}
            href={el.url}
            target="_blank"
            onClick={el.url ? null : e => e.preventDefault()}
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            {getSocialMediaIcon(el.socialMedia)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SocialMediaData, (p, n) => areEqual(p, n));
