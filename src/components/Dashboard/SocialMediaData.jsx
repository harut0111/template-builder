import React from "react";
import { areEqual } from "../../core/Comparision";
import { SOCIAL_MEDIA_LIST } from "../Constants";

const SocialMediaData = ({ elData, active }) => {
  if (elData) {
    return (
      <div
        className={`socialMediaData element ${active ? "element-active" : ""}`}
      >
        <div>
          {elData.map((el, i) => (
            <a
              key={i}
              href={el.url}
              target="_blank"
              onClick={el.url ? null: e => e.preventDefault()}
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              {
                SOCIAL_MEDIA_LIST.filter(
                  item => item.label === el.socialMedia
                )[0].Icon
              }
            </a>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default React.memo(SocialMediaData, (p, n) => areEqual(p, n));
