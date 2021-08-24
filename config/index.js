import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';    
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Search from '../Principal/Search'
import Directions from '../Principal/Search/Directions'



export default class Map extends Component {
    state = {
        region: null,
        destination: null, 
    };

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(success, error, options)(
            ({coords: {latitude, longitude}}) => {
                this.setState({region:{latitude, longitude, latitudeDelta: 0.0143, longitudeDelta: 0.0134}});
            }, //sucesso
            () => {}, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }


        )
    }

    handleLocationSelected = (data, {geometry}) => {
        const { location: { lat: latitude, lng: longitude }} = geometry;

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text 
            },
        })
    }

    render() {
    const { region, destination } = this.state

        return(
        <View style={{flex:1}}>
        <MapView
        style={{flex:1}}
        region={region}
        showsUserLocation
        loadingEnabled
        ref={el => this.mapView = el}
        >
            { destination && (
                <Directions
                    origin={region}
                    destination={destination}
                    onReady={result => {
                        this.mapView.fitToCoordinates(result.coordinates);
                    }}
                />
            ) }
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected}   />
        </View>

        )

    }
}