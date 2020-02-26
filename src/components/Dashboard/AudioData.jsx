import React from "react";
import { areEqual } from "../../utils/comparision";

const AudioData = ({ elData, active }) => {
  return (
    <div
      className="audioData"
      // className={`element ${active ? "element-active" : ""}`}
    >
      <iframe
        title="audio"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }"
      />
    </div>
  );
};

export default React.memo(AudioData, (p, n) => areEqual(p, n));

// https://developers.soundcloud.com/

// return (
//   <div className={`element ${active ? "element-active" : ""}`}>
//     <audio src="horse.ogg" controls>
//       Your browser does not support the audio element.
//     </audio>
//   </div>
// );
