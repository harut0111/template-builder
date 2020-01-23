import React, { useEffect } from "react";
import Slider from "./_Slider";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const Map = () => {
  const [{ layout }, dispatch] = useStateValue();

  const addressRef = React.useRef(null);
  const sliderRef = React.useRef(null);
  

  const handleOnChange = () => {
    const zoom = sliderRef.current.state.value;
    const address = addressRef.current.value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          address,
          zoom
        };
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(handleOnChange, []);

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
            type="text"
            placeholder="type address"
            onChange={handleOnChange}
            ref={addressRef}
          />
        </div>
        <div className="zoom" style={tempStyle}>
          <label>Zoom: </label>
          <Slider ref={sliderRef} onChange={handleOnChange} />
        </div>
      </form>
    </div>
  );
};

export default Map;
