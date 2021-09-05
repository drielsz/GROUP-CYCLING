import React, { Component } from 'react';
import{ 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Image, 
    ScrollView, 
    TouchableNativeFeedback
 } from 'react-native';



const RedeSocial =  ({navigation}) => {

    const SocialLogin = () => {
        navigation.navigate("LoginScreen")
    }

    const SocialChatG = () => { 
        console.log(`=== DRIELSZ ===`)
        navigation.navigate("SocialChat")
    }

    const SocialCam = () => { 
      console.log(``)
      navigation.navigate("")
    }
    return (
      <SafeAreaView>
          <View style={styles.header}>

          <TouchableNativeFeedback onPress={() => SocialLogin()}>
            <Image 
            source={require('../assets/cam.png')}
            style={{width: 30, height: 30}}
            resizeMode="contain"
            />
        </TouchableNativeFeedback>  


            <Image 
            source={require('../assets/netcycling.png')}
            style={{width: 150, height: 90}}
            resizeMode="contain"
            />
         

          <TouchableNativeFeedback onPress={() => SocialLogin()}>
            <Image 
            source={require('../assets/send.png')}
            style={{width: 30, height: 30}}
            resizeMode="contain"
            />
          </TouchableNativeFeedback>  

          </View>

        <ScrollView>

        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>

        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#0B1A36',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15, 
        
        borderBottomWidth: 2,
        borderBottomColor: '#FFF'

    },

    box:{
        height: 300,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5,
    }
});

export default RedeSocial;