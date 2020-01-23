import React from "react";
import { areEqual } from "../../core/Comparision";

const VideoData = ({ elData, active }) => {
  if (elData) {
    // eslint-disable-next-line
    const { provider, url, videoFormat } = elData;
    const { autoplay, loop, control } = videoFormat;

    const youtubePrser = url => {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : "";
    };

    const id = youtubePrser(url);

    return (
      <div
        className={`videoData element ${active ? "element-active" : ""}`}
        style={{ height: "220px" }}
      >
        {elData ? (
          <iframe
            title="video"
            width="100%"
            height="200"
            scrolling="no"
            frameBorder="no"
            src={`https://www.youtube.com/embed/${id}?controls=${+control}&autoplay=${+autoplay}${
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
