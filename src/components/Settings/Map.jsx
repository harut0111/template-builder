import React from "react";
import Slider from "./_Slider";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { updateElementData } from '../../utils/updateElData'
import { getActiveEl } from "../../utils/getActiveEl";

const Map = () => {
  const [{ layout }, dispatch] = useStateValue();

  const MD = getActiveEl(layout).elData;

  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const addressRef = React.useRef(null);
  const sliderRef = React.useRef(null);
  

  const handleOnChange = () => {
    const zoom = sliderRef.current.state.value;
    const address = addressRef.current.value;

    const elements = updateElementData(els, activeElId, {
      address,
      zoom
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
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
            onChange={handleOnChange}
            ref={addressRef}
          />
        </div>
        <div className="zoom" style={tempStyle}>
          <label>Zoom: </label>
          <Slider ref={sliderRef} defaultZoom={MD.zoom} onChange={handleOnChange} />
        </div>
      </form>
    </div>
  );
};

export default Map;
