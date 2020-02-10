import React from "react";

const FbPlayer = ({ elData }) => {
  const { videoFormat } = elData;
  const { autoplay } = videoFormat;

  const id = elData.url.split(/\/|=/g).filter(el => /^\d+$/.test(el))[0];

  return (
    <div className="FbPlayer">
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
};

export default FbPlayer;

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