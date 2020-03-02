import React from "react";

const YtPlayer = ({ elData }) => {
  const { url, videoFormat } = elData;
  const { autoplay, loop, control } = videoFormat;
  const youtubePrser = url => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : "";
  };
  
  const id = youtubePrser(url);
  return (
    <div className="YtPlayer videoData-responsive">
      <iframe
          title="youtube-video"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"  
          allowFullScreen
          src={`https://www.youtube.com/embed/${id}?version=3&controls=${Number(control)}&autoplay=${Number(autoplay)}${loop ? 
          `&loop=${Number(loop)}&playlist=${id}` : ""}`}
        />
    </div>
  );
};

export default YtPlayer;
