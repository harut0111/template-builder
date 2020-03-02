import React from "react";
import { Resizable } from "re-resizable";
import { areEqual } from "../../utils/comparision";
import { VIDEO_PROVIDER_LIST } from "../../configs/constants";
import YtPlayer from "./_YtPlayer";
import FbPlayer from "./_FbPlayer";

const VideoData = ({ elData }) => {
  if (elData.url) {
    let Player = YtPlayer;

    switch (elData.provider) {

      case VIDEO_PROVIDER_LIST[0].name:
        Player = YtPlayer;
        break;

      case VIDEO_PROVIDER_LIST[1].name:
        Player = FbPlayer;
        break;

      default:
        break;
    }

    return (
      <Resizable
        className="resizable-container"
        minHeight={150}
        maxHeight={400}
        enable={{ top: false, bottom: true }}
        defaultSize={{
          // width: "98%",
          height: "350"
        }}
      >
        <div className="videoData">
          <Player elData={elData} />
        </div>
      </Resizable>
    );
  }

  return (
    <div className="videoData" style={{ height: "150px", color: "red" }}>
      Set Video URL
    </div>
  );
};

export default React.memo(VideoData, (p, n) => areEqual(p, n));
