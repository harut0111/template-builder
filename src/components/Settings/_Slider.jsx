import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const _Slider = React.forwardRef((props, ref) => {
  const wrapperStyle = {
    width: "100px",
    margin: "0 10px"
  };

  return (
    <div className="_slider" style={wrapperStyle}>
      <Slider
        min={0}
        max={20}
        defaultValue={props.defaultZoom}
        ref={ref}
        onChange={props.onChange}
      />
    </div>
  );
});

export default _Slider;

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
