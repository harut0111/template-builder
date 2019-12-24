import React from "react";
import { areEqual } from "../../core/Comparision";

const AudioData = ({ elData, active }) => {
  return (
    <div
      className={`element ${active ? "element-active" : ""}`}
      //   className="audioData"
    >
      <iframe
        width="100%"
        height="200"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://soundcloud.com/uiceheidd/bandit-ft-nba-youngboy"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/690770410&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    </div>
  );
};

export default React.memo(AudioData, (p, n) => areEqual(p, n));
