import React from "react";
import { areEqual } from "../../core/Comparision";

const LinkButtonData = ({ elData, active }) => {
  //   console.log("LinkBtnData", elData);

  if (elData) {
    const { btnText, btnColor, url, bgColor, borderType } = elData;

    const style = {
      border: `2px ${borderType} #000000`,
      color: btnColor,
      backgroundColor: bgColor,

      padding: "5px",
      textDecoration: "none"
    };
    return (
      <div
        className={`element ${active ? "element-active" : ""}`}
        // className="linkButtonData"
        style={{ padding: "10px" }}
      >
        <a
          href={url ? url : "#"}
          style={style}
          target={url ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {btnText ? btnText : "Button"}
        </a>
      </div>
    );
  }
  return null;
};

export default React.memo(LinkButtonData, (p, n) => areEqual(p, n));

