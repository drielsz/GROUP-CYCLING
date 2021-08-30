import React from 'react'
import { View, StyleSheet, Button, Text  } from 'react-native';



function Perfil ({navigation}) {

  const CAST = () => { 
    navigation.reset({
      index:0,
      routes: [{name: "Social"}]
    })
}
  return (
  

    <View style={styles.container}>
      <Button
      title="Connect to Rede Social"
      color="#841584"
      onPress={() => CAST()}
      // acessibilityLabel="Learn more about this application"
      />  
    </View>
    
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center',  
    backgroundColor: '#0B1A36',
  },
  text: {
    fontSize: 15, 
    color: '#FFFFFF', 
    
  }
})


export default Perfil;



//Aba perfil, Foto, amigos, Pedais cadastrados, Historico, Fazer logout