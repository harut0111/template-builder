import React from "react";
import { areEqual } from "../../core/Comparision";

const VideoData = ({ elData, active }) => {
  if (elData) {
    // eslint-disable-next-line
    const { provider, url, videoFormat } = elData;
    const { autoplay, loop, control } = videoFormat;

    const youtubePrser = url => {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : "";
    };

    // const id = youtubePrser(url);
    const id = elData.url.split(/\/|=/g).filter(el => /^\d+$/.test(el))[0];

    // console.log  ('elData.url', elData.url);

    return (
      <div>
        <iframe
          title="facebook-video"
          width="100%"
          height="280"
          scrolling="no"
          frameBorder="no"
          src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${id}%2F&width=500&show_text=false&height=280&autoplay=${autoplay}&appId`}
          allowtransparency="true"
          allow="encrypted-media"
          allowFullScreen={true}
        ></iframe>
      </div>
    );

    return (
      <div
        className={`videoData element ${active ? "element-active" : ""}`}
        style={{ height: "220px" }}
      >
        {elData ? (
          <iframe
            title="youtube-video"
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


// https://www.facebook.com/HiteshChoudharyPage/videos/456932564854131/
//https://www.facebook.com/watch/?v=456932564854131
// https://www.facebook.com/griggevorgian/videos/181227456278694/

// href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false&height=280&appId"
// href=https%3A%2F%2Fwww.facebook.com%2FHiteshChoudharyPage%2Fvideos%2F456932564854131%2F&width=500&show_text=false&height=280&appId"
// href=https%3A%2F%2Fwww.facebook.com%2Fazatutyun%2Fvideos%2F2302670586477538%2F&width=500&show_text=false&height=280&appId"
// https://www.facebook.com/azatutyun/videos/2302670586477538/

    // return (
    //   <>
    //     <div
    //       className="fb-video"
    //       // data-href="https://www.facebook.com/facebook/videos/10153231379946729/"
    //       data-href={elData.url}
    //       data-width="500"
    //       data-show-text="false"
    //     >
    //       <div className="fb-xfbml-parse-ignore">
    //         <blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/">
    //           <a href="https://www.facebook.com/facebook/videos/10153231379946729/">
    //             How to Share With Just Friends
    //           </a>
    //           <p>How to share with just friends.</p>
    //           Posted by{" "}
    //           <a href="https://www.facebook.com/facebook/">Facebook</a> on
    //           Friday, December 5, 2014
    //         </blockquote>
    //       </div>
    //     </div>
    //   </>
    // );
