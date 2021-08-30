import React, { Component,  Fragment} from 'react';
import { View, Image, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';    
import Search from '../Principal/Search'
import Directions from '../Principal/Search/Directions'
import * as Location from 'expo-location'



import Geocoder from "react-native-geocoding";

import { getPixelSize } from "../utils";


//
import MyComponent from '../Principal/TabNavigator';
//
import markerImage from "../assets/marker.png";
import backImage from "../assets/back.png";




import {
  Back,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall
} from "./styles";

Geocoder.init("AIzaSyAV3UYYuWSpB2u2hOFL3KsR8P9XcRpgWlc");

export default class Map extends Component {
  state = {
    region: null,
    destination: null,
    duration: null,
    location: null
  };

  async componentDidMount() {

    Location.installWebGeolocationPolyfill()
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(","));
        console.log(`=== ${address} ==`)
        this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      }, //sucesso
      () => {}, //erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }




  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lon: longitude }
    } = geometry;
    
    this.setState({
      destination: {
        latitude: geometry.location.lat, 
        longitude: geometry.location.lng,
        title: data.structured_formatting.main_text
      }
    });
    // console.log(`=== ${this.state.region.latitude} ==`)
  };

  handleBack = () => {
    this.setState({ destination: null });
  };

  render() {
    const { region, destination, duration, location, latitude, longitude } = this.state;

    return (
      <View style={{ flex: 1 }}>
        
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
          ref={ el => (this.mapView = el) } 
          >

          {destination && (
            <Fragment>
              <Directions
                lineDashPattern={[0]}
                origin={region}
                destination={this.state.destination}
                onReady={result => {
                  this.setState({ duration: Math.floor(result.duration) });

                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: getPixelSize(50),
                      left: getPixelSize(50),
                      top: getPixelSize(50),
                      bottom: getPixelSize(350)
                    }
                  });
                }}
              />
              <Marker
                coordinate={{ latitude: this.state.destination.latitude, longitude: this.state.destination.longitude }}
                anchor={{ x: 0, y: 0 }}
                
              >
                <LocationBox>
                  <LocationText>{this.state.destination.title}</LocationText>
                </LocationBox>
              </Marker>

              <Marker coordinate={{ latitude: this.state.destination.latitude, longitude: this.state.destination.longitude }} anchor={{ x: 0, y: 0 }}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>{location}</LocationText>
                </LocationBox>
              </Marker>
            </Fragment>
          )}
        </MapView>

        {destination ? (
          <Fragment>
            <Back onPress={this.handleBack}>
              <Image source={backImage} />
            </Back>
          </Fragment>
        ) : (
          
          <Search onLocationSelected={this.handleLocationSelected} />
          )}
      <MyComponent style={{flex:1}}/>
      </View>
    );
  }
}


//***************************************************************************************************** */



