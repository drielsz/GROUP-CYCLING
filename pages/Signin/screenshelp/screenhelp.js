import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';




import tour01 from '../../../assets/UNDRAWIMAGE.png';
import tour02 from '../../../assets/UNDRAWIMAGE02.png';
import tour03 from '../../../assets/UNDRAWIMAGE03.png';
import tour04 from '../../../assets/UNDRAWIMAGE04.png';
import tour05 from '../../../assets/background.png'
import { Feather, Foundation } from '@expo/vector-icons'; 



import {
    Title, 
    ImageBackground as Box,
    Spacer,
    Cover,
    Text,
    Button
} 
from './styles'


import { 
    Animated,
    Image,
    View

} from 'react-native'; 


function HelpScreen({ navigation }) {

    
    const [actualScreen, setActualScreen] = useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [showRealApp, setShowRealApp]= useState(false);   
    
 const renderItem = ({item}) => {
        return(
     <Box  source={tour05} hasPadding >
            <Spacer size="20px"/>
      <Title color="light">
          {HelpTour[actualScreen]?.title}
      </Title>
            <Spacer size='50px' />
      <Cover source={HelpTour[actualScreen]?.image} width="100%" height="300px"/>
            <Spacer size='50px' />
      <Text color="light"align hasPadding> 
      {HelpTour[actualScreen]?.text}
      </Text>
      <Spacer size='50px'/>
      <Box align="center">
          <Spacer size='50px' />
      <Button  justify="center" radius size="92px" background={HelpTour[actualScreen]?.button} block 
        onPress={() => {
        alert('Clicado')
           if (actualScreen === 3) {
              goLogin();
              
              } else {

            setActualScreen(() => actualScreen + 1 );
               
              }
   
         }}
         >
         {actualScreen === 3 ? 'Explorar Desafio' : 'Próximo'}
         </Button>  
      


      </Box>
      <Text style={{left: 150}} color="light">@groupcyclingapp</Text> 

      {/* <ScalingDot
        data={HelpTour}
        scrollX={scrollX}
        containerStyle={{
          top: 1000,
        }}
        inActiveDotColor={'#347af0'}
        activeDotColor={'#347af0'}
      /> */}
    </Box>

        )
    }

    const HelpTour = [
        {   
            key:'one',
            bg: 'blue', 
            button: 'blue',
            title: `PEDALE. 
VIVA.
SONHE E 
ALCANCE!
            `,
            
            text: 'Pensamos em um serviço perfeito para você construir novas amizades, se divertir e praticar exercício físico.',
            image: tour01
        },
        {
            key:'two',
            bg: 'blue', 
            button: 'blue',
            title: `MAPA

 
  
            `,
            text: 'O Mapa tem uma função que permite o usúario cadastrar e localizar pedais próximos a sua localização.',
            image: tour02
        },
        {
            key:'three',
            bg: 'blue', 
            button: 'blue',
            title: `PERFIL
            
            

            `,
            text: 'O usúario pode modificar o seu perfil, colocando dados que serão exibidos aos demais utilizadores do APP.',
            image: tour03
        },
        {
            key:'for',
            bg: 'blue', 
            button: 'blue',
            title: `NET
CYCLING


            `,
            text: 'O NET Cycling é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários.',
            image: tour04
        },
    ];

    const goLogin = async () => {
        await AsyncStorage.setItem('@tour', 'Y');
        navigation.navigate('Signin')
      };

    const NextButton = () => {
        return(
            <View >
                <Text color="light">Next</Text>
            </View>
        )
    }

    const DoneButton = () => {
        navigation.navigate('Signin')
    }

    function renderScreens ({item}){
        return(
        
       <Box  source={tour05} hasPadding >
            <Spacer size="20px"/>
      <Title color="light">
          {item.title}
      </Title>
            <Spacer size='50px' />
      <Cover source={item.image} width="100%" height="300px"/>
            <Spacer size='50px' />
      <Text color="light" align hasPadding> 
      {item.text}
      </Text>
      <Spacer size='50px'/>
      <Box align="center">
          <Spacer size='50px' />
      <Button justify="center" radius size="70px" background={item.button} block 
        onPress={() => {
            alert('Clicado')
            if (actualScreen === 3) {
              goLogin();
              
              } else {

            setActualScreen(() => actualScreen + 1 );
               
              }
   
         }}
         >
         {actualScreen === 3 ? 'Explorar Desafio' : 'Próximo'}
         </Button>  
      


      </Box>
      <Text style={{left: 150}} color="light">@groupcyclingapp</Text> 

    </Box>
      )
      }
    return(
        <>
        {
            showRealApp ? (


                <Box  align='center' justify='center'>
                <Text color="dark50" > ERROR404 </Text>
                </Box>
                

            ): (

    <>
    
    <AppIntroSlider
    renderItem={renderScreens}
    data={HelpTour}
    dotStyle={{bottom: 25,backgroundColor: '#fff'}}
    renderDoneButton={DoneButton}
    activeDotStyle={{bottom: 25,backgroundColor: '#00A3FF',}}
    renderNextButton={NextButton}  
        
    />

    </>
            )
        }
        </>
    )
};


export default HelpScreen;

