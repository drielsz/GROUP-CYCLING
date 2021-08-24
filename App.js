import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './Principal/Principal';
import  FinCadastro from './finalizado/obrigado'
import  TelaCadastro from './cadastro/cadastro';
import Perfil from './Principal/Perfil'
import Recover from './anaktisi/index.js'
import Signin from './pages/Signin';


const Stack = createStackNavigator();

function MyStack() {
  return (
      
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin}
        options={{ headerShown: false }}
        />

      <Stack.Screen name="Principal" component={Principal}  
      options={{ headerShown: false }}
      />

      <Stack.Screen name="TelaCadastro" component={TelaCadastro} 
           options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0B1A36'
            },
            headerTintColor: '#FFF'
            }}
      />

      <Stack.Screen name="FinCadastro" component={FinCadastro} 
      options={{ headerShown: false }}
      />

       <Stack.Screen name= "Perfil" component={Perfil}
      options={{ headerShown: false }}
        />
      
        <Stack.Screen name="Recover" component={Recover}
        options={{ headerShown: false }}
        />
        
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style ="light" />
    </NavigationContainer>
  );
}





//#122a57