import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { areEqual } from "../../core/Comparision";

const MapData = ({ elData, active }) => {
  const onClick = param => {
    console.log("onClick", param);
  };

  const onMapLoad = () => {
    console.log("onMapLoad");
  };

  const center = {
    lat: 0,
    lng: -180
  };

  return (
    <div className={`mapData element ${active ? "element-active" : ""}`}>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCnB2E_TdpTGGrc2LaSsb_v8jdXWJZICdU"
        // {...other props}
      >
        <GoogleMap
          id="example-map"
          // mapContainerStyle={styles.container}
          mapContainerStyle={{ height: "250px" }}
          zoom={5}
          center={center}
          onClick={onClick}
          onLoad={onMapLoad}
        >
          ...Your map components
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MapData, (p, n) => areEqual(p, n));
