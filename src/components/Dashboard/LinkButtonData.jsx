import React from "react";

const LinkButtonData = ({ elData }) => {
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
      <div className="linkButtonData" style={{ padding: "10px" }}>
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
  return <div style={{ color: "red" }}>Please set settings</div>;
};

export default LinkButtonData;
