import React from "react";

const VideoData = ({ elData }) => {
  if (elData) {
    const { provider, url, videoFormat } = elData;
    const { autoplay, loop, control } = videoFormat;

    // console.log({ ...videoFormat });
    // console.log(`https://www.${provider}/${url}?autoplay=${+autoplay}&loop=${+loop}&controls=${+control}`);

    return (
      <div className="videoData" style={{ height: "150px" }}>
        {elData ? (
          <iframe
            title="videFrame"
            width="220"
            height="145"
            src={`https://www.${provider}/${url}?controls=${+control}&autoplay=${+autoplay}${
              loop ? `&${+loop}&playlist=${url}` : ""
            }`}
          />
        ) : null}
      </div>
    );
  } else {
    return (
      <div style={{ height: "150px", color: "red" }}>Set Video Settings</div>
    );
  }
};

const areEqual = (prevProps, nextProps) => {
  const prevVal = JSON.stringify(prevProps.elData);
  const nextVal = JSON.stringify(nextProps.elData);
  
  return prevVal === nextVal;
};

export default React.memo(VideoData, areEqual);
