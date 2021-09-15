import React, { useState } from 'react';
import { StyleSheet,  Animated, TouchableWithoutFeedback } from 'react-native'
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function FabButton() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [animation] = useState(new Animated.Value(0))

    const visibleMenu = () => {
        const toValue = visible ? 0 : 1
        Animated.spring(animation, {
            toValue,
            friction: 10,
            useNativeDriver: true,
        }).start();
       setVisible (!visible)
    }

   const visibleAlert = () => {
        alert("CLIQUEI")
    }
    
           
        const PlusAnimation = {
            transform:[
                {
                    rotate: animation.interpolate({
                        inputRange: [0,1],
                        outputRange:["0deg", "45deg"]
                    })
                }
            ]
        }

        const UserAnimation = {
            transform:[
                {scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0, -100]
                    })
                }
            ]
        }

        const infoAnimation = {
            transform:[
                {scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0, -180]
                    })
                }
            ]
        }
        const NotificationAnimation = {
            transform:[
                {scale: animation},
                {
                    translateY: animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0, -260]
                    })
                }
            ]
        }

        const User = () => {
            navigation.navigate("Perfil")
          }

        return(
            <>
                  <TouchableWithoutFeedback onPress={() => navigation.navigate("Helpscreen")}>
                  <Animated.View style={[styles.buttonfab, styles.infoSettings, infoAnimation]}>
                    <Feather name="info" size={20} color="#FFF" />
                  </Animated.View>
              </TouchableWithoutFeedback>

            


              <TouchableWithoutFeedback onPress={ () => navigation.navigate('Perfil')}>
                  <Animated.View style={[styles.buttonfab, styles.MenuUser, UserAnimation]}>
                      <Feather name="user" size={20} color="#FFF" />
                  </Animated.View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={( ) => alert('settings')}>
                  <Animated.View style={[styles.buttonfab, styles.MenuNotifications, NotificationAnimation]}>
                  <Ionicons name="notifications-outline" size={20} color="#FFF" />
                  </Animated.View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={visibleMenu}>
                  <Animated.View style={[styles.buttonfab, styles.MenuPlus, PlusAnimation]}>
                      <AntDesign name="plus" size={35} color="#FFF"/>
                  </Animated.View>
              </TouchableWithoutFeedback>
                
       </>
        )
    }


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    buttonfab:{
        position: 'absolute',
        height: hp(8),
        width: wp(16),
        left: 370,
        bottom: 50,
        borderRadius: 300 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#00213B',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: hp(10),
        }
    },
    infoSettings:{
        top: 1040,
        left: 350,
        width: wp(12),
        height: hp(6), 
        borderRadius: 300/2,
        backgroundColor: '#00213b'
    },
    MenuUser:{
        top: 970,
        left: 430,
        width: wp(12),
        height: hp(6), 
        borderRadius: 300/2,
        backgroundColor: '#00213b'
    },
    MenuNotifications:{
        top: 1185,
        left: 295,
        width: wp(12),
        height: hp(6), 
        borderRadius: 300/2,
        backgroundColor: '#00213b'
    },
    MenuPlus:{
        backgroundColor: '#00213b'
    },
})

