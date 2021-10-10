import React, { Component,  Fragment } from 'react';
import { View, Image, Text, Button} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from '../Principal/Search'
import Directions from '../Principal/Search/Directions'
import * as Location from 'expo-location'
import FabButton from '../pages/Signin/FabButton/FabButton'
import ModalComponent from'../Principal/Modalsx'


import Geocoder from "react-native-geocoding";

import { getPixelSize } from "../utils";

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
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      destination: null,
      duration: null,
      location: null
    };
  };


 componentDidMount() {
    Location.installWebGeolocationPolyfill()
     navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
        const response =  Geocoder.from({ latitude, longitude });
        const address =  response.results[0].formatted_address;
        const location =  address.substring(0, address.indexOf(","));


         this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }


  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;

    this.setState({
      destination: {
        latitude: geometry.location.lat,
        longitude: geometry.location.lng,
        title: data.structured_formatting.main_text
      }
    });


  };

  getMyLocation = (data, { geometry }) => {
    this.setState({
      region: {
        latitude: geometry.location.lat,
        longitude: geometry.location.lng,
        title: data.structured_formatting.main_text,
        latitudeDelta: 0.0134,
        longitudeDelta: 0.0134
      }
    });


  };

  handleBack = () => {
    this.setState({ destination: null, region: null });
  };

  render () {

    const { region, destination, duration, location } = this.state;


    return (
      <View style={{ flex: 1 }}>

        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}
        >
          {destination && (
            <Fragment>
              <Directions
                lineDashPattern={[0]}
                origin={this.state.region}
                // waypoints= {(this.state.coordinates.lenght > 2) ? this.state.coordinates.slice(1, -1): null}
                // optimizeWaypoints={true}
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
                image={markerImage}
              >
                <LocationBox>
                  <LocationText>{this.state.destination.title}</LocationText>
                </LocationBox>
              </Marker>

              <Marker coordinate={this.state.region} anchor={{ x: 0, y: 0 }}>
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
              <Button title='Exiba o modal' color='red'/>
            </Fragment>
        ) : (
          <>
              <FabButton />
              <Search onLocationSelected={this.getMyLocation} vert={60} fine={false} placeholder="Origem" />
              {region ? (
                <><>
                  <Search onLocationSelected={this.handleLocationSelected} vert={120} fine={true} placeholder="Destino" />
                </><>

                </></>
                ) : (<View></View>)}

         </>

        )}
      </View>
    );
  }
}