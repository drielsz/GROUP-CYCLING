import Icon from 'react-native-vector-icons/Ionicons';
import Perfil from './Perfil'
import Notificacoes from './Notificacoes';
import Menu from './Menu'
import Principal from './Principal'



import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function MyTabs () {
    return (

      <Tab.Navigator
      initialRouteName="Principal"
      activeColor="#f0edf6"
      inactiveColor="#f0edf6"
      barStyle={{ backgroundColor: '#0B1A36' }}
      >
        <Tab.Screen name="Configurações" component={Principal}
        options={{
        headerShown: false,
          tabBarLabel: 'Map',
          tabBarColor: '#0B1A36',
          tabBarIcon: ({ color }) => (
            <Icon name="location-sharp" color={color} size={26}  />
          ),
        }}
        />
        <Tab.Screen name="Notificações" component={Notificacoes}
            name="Notificações"
            options={{
              tabBarLabel: 'Notificações',
              tabBarColor: '#0e2246',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}



        />
        {/* <Tab.Screen name="EPA" component={EPA} /> */}
        <Tab.Screen name="Perfil" component={Perfil}
                options={{
                  tabBarLabel: 'Perfil',
                  tabBarColor: '#122a57',
                  tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Menu" component={Menu}
            options={{
              tabBarLabel: 'Menu',
              tabBarColor: '#153267',
              tabBarIcon: ({ color }) => (
                <Icon name="menu-sharp" color={color} size={26} />
                ),
              }}
        />

      </Tab.Navigator>

);
}

export default function App() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }