import React, { Component } from 'react';
import { View, StyleSheet,  Animated, TouchableWithoutFeedback, Button } from 'react-native'
import { AntDesign, Entypo, Ionicons, Feather } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class FabButton extends Component {

    animation = new Animated.Value(0);

    visibleMenu = () => {
        const toValue = this.visible ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 10,
            useNativeDriver: true,
        }).start();

        this.visible = (!this.visible)

    }

    visibleAlert = () => {
        alert("CLIQUEI")
    }

    render(){

        const PlusAnimation = {
            transform:[
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:["0deg", "45deg"]
                    })
                }
            ]
        }

        const UserAnimation = {
            transform:[
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0, -100]
                    })
                }
            ]
        }

        const SettingsAnimation = {
            transform:[
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0, -180]
                    })
                }
            ]
        }
        const NotificationAnimation = {
            transform:[
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0, -260]
                    })
                }
            ]
        }

        return(
            <>

              <TouchableWithoutFeedback onPress={this.visibleAlert}>
                  <Animated.View style={[styles.buttonfab, styles.menuquote, SettingsAnimation]}>
                      <Feather name="settings" size={20} color="#FFF"/>
                  </Animated.View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={this.visibleMenu}>
                  <Animated.View style={[styles.buttonfab, styles.menusub, UserAnimation]}>
                      <Feather name="user" size={20} color="#FFF" />
                  </Animated.View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={this.visibleAlert}>
                  <Animated.View style={[styles.buttonfab, styles.menuquote, NotificationAnimation]}>
                    <Ionicons name="notifications-outline" size={20} color="#FFF" />
                  </Animated.View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={this.visibleMenu}>
                  <Animated.View style={[styles.buttonfab, styles.menu, PlusAnimation]}>
                      <AntDesign name="plus" size={25} color="#FFF"/>
                  </Animated.View>
              </TouchableWithoutFeedback>
                
       </>
        )
    }
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
    menu:{
        backgroundColor: '#00213b'
    },
    menusub:{
        left: 380,
        width: wp(12),
        height: hp(6), 
        borderRadius: 300/2,
        backgroundColor: '#00213b'
    },
    menuquote:{
        left: 380,
        width: wp(12),
        height: hp(6), 
        borderRadius: 300/2,
        backgroundColor: '#00213b'
    }
})