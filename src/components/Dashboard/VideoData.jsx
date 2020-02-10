import React from "react";
import { areEqual } from "../../core/Comparision";
import { VIDEO_PROVIDER_LIST } from "../Constants";
import YtPlayer from "./_YtPlayer";
import FbPlayer from "./_FbPlayer";

const VideoData = ({ elData, active }) => {
  if (elData) {
    // eslint-disable-next-line
    const { provider, url, videoFormat } = elData;
    // const { autoplay, loop, control } = videoFormat;

    let Player = <YtPlayer elData={elData} />;

    switch (provider) {
      case VIDEO_PROVIDER_LIST[0]:
        Player = YtPlayer;
        break;
      case VIDEO_PROVIDER_LIST[1]:
        Player = FbPlayer;
        break;
      // case VIDEO_PROVIDER_LIST[2]:
      //   Player = FbPlayer;
      //   break;
      default:
        break;
    }

    return (
      <div
        className={`videoData element ${active ? "element-active" : ""}`}
        style={{ height: "220px" }}
      >
        <Player elData={elData} />
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
