import React from "react";
import { areEqual } from "../../core/Comparision";

const AudioData = ({ elData, active }) => {
  return (
    <div className={`element ${active ? "element-active" : ""}`}>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }"
      />
    </div>
  );
  return (
    <div className={`element ${active ? "element-active" : ""}`}>
      <audio src="horse.ogg" controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default React.memo(AudioData, (p, n) => areEqual(p, n));

// https://developers.soundcloud.com/
