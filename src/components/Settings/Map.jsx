import React from "react";
import Slider from "./_Slider";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";
import { setZoomVal, setAddressVal } from "../../utils/setStateValues";

const Map = () => {
  const [{ layout }, dispatch] = useStateValue();

  const MD = getActiveEl(layout).elData;

  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const addressRef = React.useRef(null);
  const sliderRef = React.useRef(null);

  const handleOnAddressChange = () => {
    dispatch(updateElState(setAddressVal(addressRef, els, activeElId)));
  };

  const handleOnZoomChange = () => {
    dispatch(updateElState(setZoomVal(sliderRef, els, activeElId)));
  };

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
          <input
            value={MD.address}
            type="text"
            placeholder="type address"
            onChange={handleOnAddressChange}
            ref={addressRef}
          />
        </div>
        <div className="zoom" style={tempStyle}>
          <label>Zoom: </label>
          <Slider
            ref={sliderRef}
            defaultZoom={MD.zoom}
            onChange={handleOnZoomChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Map;
