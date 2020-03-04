import React from "react";
import { Resizable } from "re-resizable";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { areEqual } from "../../utils/comparision";

const MapData = ({ elData }) => {
  const onClick = param => "";
  const onMapLoad = param => "";

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
    <Resizable
      className="resizable-container"
      // style={style}
      minHeight={150}
      maxHeight={800}
      enable={{ top: false, bottom: true }}
      defaultSize={{
        // width: "98%",
        height: 200
      }}
    >
      <div
        className="mapData"
        // className={`mapData element ${active ? "element-active" : ""}`}
      >
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCnB2E_TdpTGGrc2LaSsb_v8jdXWJZICdU"
        >
          <GoogleMap
            id="example-map"
            // mapContainerStyle={styles.container}
            mapContainerStyle={{
              position: "absolute",
              height: "100%",
              width: "100%"
            }}
            zoom={elData.zoom}
            center={center}
            onClick={onClick}
            onLoad={onMapLoad}
          >
            ...Your map components
          </GoogleMap>
        </LoadScript>
      </div>
    </Resizable>
  );
};

export default React.memo(MapData, (p, n) => areEqual(p, n));
