import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:'',
  });
  const center = useMemo(() => ({lat:47.041260, lng:8.305170}),[] );

  return (
    <div className="App">
    {!isLoaded ? (
      <h1>Loading...</h1>
    ) : (
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
       
        <MarkerF position={{ lat:47.041260, lng: 8.305170 }} />
      </GoogleMap>
    )}
  </div>
  );
};

export default Map