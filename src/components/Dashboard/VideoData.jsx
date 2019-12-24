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
        style={{ height: "220px" }}
      >
        {elData ? (
          <iframe
            title="video"
            width="100%"
            height="200"
            scrolling="no"
            frameBorder="no"
            src={`https://www.${
              provider.value
            }/${id}?controls=${+control}&autoplay=${+autoplay}${
              loop ? `&${+loop}&playlist=${url}` : ""
            }`}
          />
        ) : null}
      </div>
    );
  }
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
      style={{ height: "150px", color: "red" }}
    >
      Set Video Settings
    </div>
  );
};

export default React.memo(VideoData, (p, n) => areEqual(p, n));
