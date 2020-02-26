import React from "react";
import { areEqual } from "../../utils/comparision";

const LinkButtonData = ({ elData, active }) => {
  //   console.log("LinkBtnData", elData);

  if (elData) {
    const { btnText, btnColor, url, bgColor, borderType } = elData;

    const style = {
      border: `2px ${borderType} #000000`,
      color: btnColor,
      backgroundColor: bgColor,      
    };
    return (
      <div
        className={`linkButtonData element ${active ? "element-active" : ""}`}
        style={{ padding: "10px" }}
      >
        <a
          href={url ? url : "#"}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
          onClick={url ? null : e => e.preventDefault()}
        >
          {btnText ? btnText : "Button"}
        </a>
      </div>
    );
  }
  return <div>Add button settigns</div>;
};

export default React.memo(LinkButtonData, (p, n) => areEqual(p, n));
