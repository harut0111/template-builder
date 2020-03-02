import React from "react";
import { areEqual } from "../../utils/comparision";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SliderData = ({ elData }) => {
  const list = elData.imgSrc.filter(imgSrc => imgSrc.value);

  const emptyDivStyle = {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div
      className="sliderData"
      // className={`sliderData element ${active ? "element-active" : ""}`}
    >
      {list.length ? (
        <Carousel
          interval={elData.duration}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          {list.map(imgSrc => (
            <div key={imgSrc.id}>
              <img src={imgSrc.value} alt="img" />
            </div>
          ))}
        </Carousel>
      ) : (
        <div style={emptyDivStyle}>Choose image from assets</div>
      )}
    </div>
  );
};

export default React.memo(SliderData, (p, n) => areEqual(p, n));
