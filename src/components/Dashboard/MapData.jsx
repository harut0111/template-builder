import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { areEqual } from "../../utils/comparision";

const MapData = ({ elData, active }) => {
  console.log("elData", elData);

  const onClick = param => console.log("onClick", param);
  const onMapLoad = param => console.log("onMapLoad", param);

  const center = {
    lat: 40.1872,
    lng: 44.5152
  };

  // const Geocoding = async () => {
  //   const response = await fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=Yerevan+CA&key=AIzaSyCnB2E_TdpTGGrc2LaSsb_v8jdXWJZICdU`
  //   );

  //   const jsonData = await response.json();
  //   console.log('response', response);
  //   console.log('jsonData', jsonData);
  // };

  // React.useEffect(() => {
  //   Geocoding();
  // }, []);

  return (
    <div className={`mapData element ${active ? "element-active" : ""}`}>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCnB2E_TdpTGGrc2LaSsb_v8jdXWJZICdU"
      >
        <GoogleMap
          id="example-map"
          // mapContainerStyle={styles.container}
          mapContainerStyle={{ height: "250px" }}
          zoom={elData ? elData.zoom : 0}
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
