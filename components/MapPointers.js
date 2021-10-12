import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/sqlite/axios.js';

import markerImage from "../assets/marker.png";

import {
  Back,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall
} from '../config/styles'

const MapPointers = () => {
  const [pointers, setPointers] = useState([]);

  const handlePointers = async () => {
    let response = await api.get("events", {
      headers: { "X-access-token": await AsyncStorage.getItem("token") }
    }).then( async (response) => {
      setPointers(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    });
  };

  // TODO: Ficar fazendo requisições constantemente
  setTimeout( handlePointers, 2000 );
  
  return (
    <>
    { pointers.length > 0 ? (
      pointers.map((item) => {
        return (
          <Marker
            coordinate={{ latitude: item.origin_latitude, longitude: item.origin_longitude }}
            anchor={{ x: 0, y: 0 }}
            key={item.id}
            image={markerImage}
          >
            <LocationBox>
              <LocationText>{item.title}</LocationText>
            </LocationBox>
          </Marker>
        )
        })
    ) : (<></>)}
    </>
  );
}

export default MapPointers;
