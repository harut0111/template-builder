import React from "react";
import Slider from "./_Slider";

const Map = () => {
  const tempStyle = {
    display: "flex",
    justifyContent: "left",
    textAligne: "center"
  };
  return (
    <div className="Map">
      <h3>Map</h3>
      <form>
        <div className="address">
          <label>Address: </label>
          <input type="text" placeholder="type address" />
        </div>
        <div className="zoom" style={tempStyle}>
          <label>Zoom: </label>
          <Slider />
        </div>
      </form>
    </div>
  );
};

export default Map;
