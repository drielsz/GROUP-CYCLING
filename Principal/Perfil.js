import React from 'react'
import { View, StyleSheet, TouchableOpacity  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Signin from '../pages/Signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './Principal'
import { Button, Text as TextButton, KeyboardView2, Text } from './styles';

function Perfil ({navigation}) {

const Stack = createStackNavigator();

const Sair = () => { 
    // alert(login.usuario)
    navigation.reset({
      index: 0,
      routes: [{name:"Signin"}]
    })
  }


    return (
    <KeyboardView2>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <TextButton>QUEM LEU É CORNO</TextButton>
        </View>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                onPress={() => Sair()}
                style={{ marginVertical: 20 }}
                >
                <TextButton>
                   Sair
                </TextButton>
                </Button>

                <Button
                style={{ marginVertical: 20 }}
                >
                <TextButton>

                </TextButton>
                </Button>
                
        </View>
    </View>
    </KeyboardView2>
    
    
    
    
    //   <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', }}>
    //     <Button onPress={() => Sair()}>
    //         <Text style ={{color:'#fff'}}>
    //            Sair  
    //         </Text>
    //     </Button>
    //   </View>     
       
    );
  }

// <View> <View> Text <View> Text View
export default Perfil;



//Aba perfil, Foto, amigos, Pedais cadastrados, Historico, Fazer logout