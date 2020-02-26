import React from "react";
import { Resizable } from "re-resizable";
import { areEqual } from "../../utils/comparision";
import { VIDEO_PROVIDER_LIST } from "../../configs/constants";
import YtPlayer from "./_YtPlayer";
import FbPlayer from "./_FbPlayer";

const VideoData = ({ elData }) => {
  if (elData) {
    const { provider } = elData;

    let Player = YtPlayer;

    switch (provider) {
      case VIDEO_PROVIDER_LIST[0].name:
        Player = YtPlayer;
        break;
      case VIDEO_PROVIDER_LIST[1].name:
        Player = FbPlayer;
        break;
      default:
        break;
    }

    const style = {
      // display: "flex",
      // alignItems: "center",
      justifyContent: "center",
      border: "solid 1px #ddd",
      background: "#f0f0f0"
    };

    return (
      <Resizable
        className="resizable-container"
        style={style}
        minHeight={150}
        maxHeight={300}
        enable={{ top: false, bottom: true }}
        defaultSize={{
          // width: "98%",
          height: 200
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
      Set Video Settings
    </div>
  );
};

export default React.memo(VideoData, (p, n) => areEqual(p, n));
