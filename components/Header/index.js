import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
// import { Container } from './styles';
import Logo from '../../assets/logoxd.png';


function Header() {
  return(
    <View style={styles.container}>
      <Image 
        source={Logo}
        resizeMode="contain"
        style={{ height: 360, bottom: 95,  }}
      />
    </View>
    

  )
}

const styles = StyleSheet.create({
  container: {
  position: "relative",
  padding: 150,
  elevation: 6,
    
  },
Image: {


},

})

export default Header;



