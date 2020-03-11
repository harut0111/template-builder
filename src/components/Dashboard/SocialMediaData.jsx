import React from "react";
import { areEqual } from "../../utils/comparision";
import { getSocialMediaIcon } from "../../utils/getSocialMediaIcon";

const SocialMediaData = ({ elData }) => {
  return (
    <div className="socialMediaData">
      {elData.map((el, i) => (
        <a
          className={el.socialMedia}
          key={i}
          href={el.url.value}
          target="_blank"
          onClick={el.url.validity ? null : e => e.preventDefault()}
          rel="noopener noreferrer"
        >
          {getSocialMediaIcon(el.socialMedia)}
        </a>
      ))}
    </div>
  );
};

export default React.memo(SocialMediaData, (p, n) => areEqual(p, n));
