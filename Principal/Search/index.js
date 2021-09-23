import React, { Component, useState} from "react";
import { Platform,  View,  Modal, Text, Alert, TextInput, Button } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFocused: false,
      modalVisible: false
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    
  }

  render() {

    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;
    const { modalVisible } = this.state;


  return (
    <>

    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible);
        }}
        >
          <View style={{flex: 1,justifyContent: "center",alignItems: "center", marginTop: 22}}>
            <View  style={{ width: 420, height: 600, margin: 20, backgroundColor: "#0B1A36", borderRadius: 20, padding: 35, alignItems: "center",
            shadowColor: "#000", shadowOffset: { width: 0,height: 2}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}}>
              <Text style={{  fontWeight: "bold", color:'#FFF', marginBottom: 15, textAlign: "center"  }}>Configure o seu pedal</Text>

          <>
              <TextInput
              placeholder="Tipo de rota:"
              placeholderTextColor="#FFFF"
              />
              <TextInput
              placeholder="Tipo de bike:"
              placeholderTextColor="#FFFF"
              />
              <TextInput
              placeholder="Intensidade de treino:"
              placeholderTextColor="#FFFF"
              />
              <TextInput
              placeholder="Estilo de encontro:"
              placeholderTextColor="#FFFF"
              />
          </>

              <Button 
              style={{ top: 500, color: 'gray' }}
              styleDisabled={{color: 'red'}}
              onPress={() => this.setModalVisible(false)}  
              title="CONFIRMAR"   
              > 
              </Button>

            </View>
          </View>
        </Modal>  
      </View> 

 
      <GooglePlacesAutocomplete
      placeholder={this.props.placeholder}
      placeholderTextColor="#333"
      onPress={async (value, { geometry }) => {
        onLocationSelected(value, { geometry });
        if ( this.props.vert >= 61  ) {
          return(
          this.setModalVisible(true)
          )}
        

        console.log(`OnlocationSelected: ${this.props.onLocationSelected}`)  
        
      }}
      
      query={{
        key: "AIzaSyAV3UYYuWSpB2u2hOFL3KsR8P9XcRpgWlc",
        language: "pt-br"
      }}
      textInputProps={{
        onFocus: () => {
          this.setState({ searchFocused: true });
        },
        onBlur: () => {
          this.setState({ searchFocused: false });
          },
          
          autoCorrect: false
        }}
        
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: "absolute",
            top: Platform.select({ ios: 80, android: this.props.vert }),
            width: "100%",
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: "transparent",
            height: 54,
            marginHorizontal: 20,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            
          },
          textInput: {
            color: '#000',
            height: 54,
            margin: 0,
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: "#DDD",
            fontSize: 18
          },
          listView: {
            borderWidth: 1,
            borderColor: "#DDD",
            backgroundColor: "#FFF",
            marginHorizontal: 20,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 10
          },
          description: {
            fontSize: 12,
          },
          row: {
            padding: 20,
            height: 70
          },
        }}
        />  
    </>  
    );    
  };
};