import React, { useState, useEffect } from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Button, Image } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';




import { api } from '../services/sqlite/axios.js';

import FunctionAdd from './FunctionAdd'

import MARKERGPC from "../assets/googleteste.png";
import markerimage from '../assets/marker.png'

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
  const [modalVisible, setModalVisible] = useState(false);

  const [counter, setCounter] = useState(0)
  const incrementValue = () => {
    console.log('TA CLICANDO')
    setCounter(counter + 1)  
  }
  


  const handlePointers = async () => {
    let response = await api.get("events", {
      headers: { "X-access-token": await AsyncStorage.getItem("token") }
    }).then( async (response) => {
      setPointers(response.data);
    }).catch((error) => {
      alert(error.response.data.message);
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
            image={markerimage}
          > 
        {/*POSSIVEL SOLUÇÃO PARA O MARCADOR BUGADO, PUXANDO UMA IMAGE COM O TAMANHO PERSONALIZADO. */} 
        {/* <Image source={require('../assets/googleteste.png')} style={{height: 16, width:16 }} resizeMode='contain'/> */}
          <Callout onPress={incrementValue}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Participantes: {counter}</Text>
          </Callout>
          </Marker>
        )
        })
    ) : (<></>)}
    </>
  );
}

export default MapPointers;
