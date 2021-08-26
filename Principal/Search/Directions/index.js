import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAV3UYYuWSpB2u2hOFL3KsR8P9XcRpgWlc"
    strokeWidth={3}
    strokeColor="#FF8300"
  />
);

export default Directions;