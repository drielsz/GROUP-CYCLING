import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import { ThemeProvider } from 'styled-components/native'
import { Provider as PaperProvider } from 'react-native-paper'
import App from './App'
import { colors } from './assets/theme.json'




import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  } from '@expo-google-fonts/ubuntu';





const App01 = () => {

    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
      });

      if (!fontsLoaded) {
          //PODE EXIBIR LOADING OU SPLASH SCREEN
          return null
      }

    return(
        <ThemeProvider theme={colors}>
            <PaperProvider>
                <App/>
            </PaperProvider>
        </ThemeProvider>
    )
}



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App01);
    