import React from "react";
import { areEqual } from "../../core/Comparision";

const VideoData = ({ elData, active }) => {
  if (elData) {
    const { provider, url, videoFormat } = elData;
    const { autoplay, loop, control } = videoFormat;

    // console.log({ ...videoFormat });
    // console.log(`https://www.${provider.value}/${url}?autoplay=${+autoplay}&loop=${+loop}&controls=${+control}`);

    const id = url.slice(url.lastIndexOf("=") + 1);

    return (
      <div
        className={`element ${active ? "element-active" : ""}`}
        // className="videoData"
        style={{ height: "150px" }}
      >
        {elData ? (
          <iframe
            title="videFrame"
            width="220"
            height="145"
            src={`https://www.${
              provider.value
            }/${id}?controls=${+control}&autoplay=${+autoplay}${
              loop ? `&${+loop}&playlist=${url}` : ""
            }`}
          />
        ) : null}
      </div>
    );
  } else {
    return (
      <div
        className={`element ${active ? "element-active" : ""}`}
        style={{ height: "150px", color: "red" }}
      >
        Set Video Settings
      </div>
    );
  }
};

export default React.memo(VideoData, (p, n) => areEqual(p, n));
