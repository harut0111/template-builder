import React from "react";
import { areEqual } from "../../utils/comparision";

const LinkButtonData = ({ elData }) => {
  if (elData.url.value) {
    const { btnText, btnColor, url, bgColor, borderType } = elData;

    const style = {
      border: `2px ${borderType} #000000`,
      color: btnColor,
      backgroundColor: bgColor
    };
    return (
      <div className="linkButtonData" style={{ padding: "10px" }}>
        <a
          href={url.value}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
          onClick={url.value ? null : e => e.preventDefault()}
        >
          {btnText ? btnText : "Button"}
        </a>
      </div>
    );
  }
  return <div>Add button URL</div>;
};

export default React.memo(LinkButtonData, (p, n) => areEqual(p, n));
