import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady, waypoints }) => (
  <MapViewDirections
    lineDashPattern={[0]}
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAV3UYYuWSpB2u2hOFL3KsR8P9XcRpgWlc"
    strokeWidth={3}
    strokeColor="#0091E2"
    precision='high'
    mode='BICYCLING'
    language='pt-br'
    />
);

export default Directions;