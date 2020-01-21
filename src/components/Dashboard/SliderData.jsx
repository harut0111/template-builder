import React from "react";
import { areEqual } from "../../core/Comparision";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SliderData = ({ elData, active }) => {
  const list = elData && elData.imgSrc.filter(imgSrc => imgSrc.value);

  const emptyDivStyle = {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div className={`sliderData element ${active ? "element-active" : ""}`}>
      {elData ? (
        list.length ? (
          <Carousel
            autoPlay={true}
            interval={elData.duration}
            infiniteLoop={true}
          >
            {list.map(imgSrc => (
              <div key={imgSrc.id}>
                <img src={imgSrc.value} alt="img" />
              </div>
            ))}
          </Carousel>
        ) : (
          <div style={emptyDivStyle}>Choose image from assets</div>
        )
      ) : null}
    </div>
  );
};

export default React.memo(SliderData, (p, n) => areEqual(p, n));
