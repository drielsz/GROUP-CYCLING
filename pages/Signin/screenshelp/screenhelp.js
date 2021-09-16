import React, {useState}from 'react';
import tour01 from '../../../assets/UNDRAWIMAGE.png';
import tour02 from '../../../assets/UNDRAWIMAGE02.png';
import tour03 from '../../../assets/UNDRAWIMAGE03.png';
import tour04 from '../../../assets/UNDRAWIMAGE04.png';
import tour05 from '../../../assets/background.png'


import {
    Title, 
    ImageBackground as Box,
    Spacer,
    Cover,
    Text,
    Button
} 
from './styles'
import replace from '../navigation/navigation'


import { 
    StyleSheet,
    View,
    Animated,
    FlatList,
    useWindowDimensions,
  } from 'react-native'; 

  import {
    ScalingDot,
} from 'react-native-animated-pagination-dots';


export default function Helpscreen ({navigation}) {
    
    function goLogin () {
        navigation.navigate('Signin')
    }

    const HelpTour = [
        {   
            key:'1',
            bg: 'blue', 
            button: 'blue',
            title: `PEDALE. 
VIVA.
SONHE E 
ALCANCE!
            `,
            
            desc: 'Pensamos em um serviço perfeito para você construir novas amizades, se divertir e praticar exercício físico.',
            picture: tour01
        },
        {
            key:'2',
            bg: 'blue', 
            button: 'blue',
            title: `MAPA

 
  
            `,
            desc: 'O Mapa tem uma função que permite o usúario cadastrar e localizar pedais próximos a sua localização.',
            picture: tour02
        },
        {
            key:'3',
            bg: 'blue', 
            button: 'blue',
            title: `PERFIL
            
            

            `,
            desc: 'O usúario pode modificar o seu perfil, colocando dados que serão exibidos aos demais utilizadores do APP.',
            picture: tour03
        },
        {
            key:'4',
            bg: 'blue', 
            button: 'blue',
            title: `NET
CYCLING


            `,
            desc: 'O NET Cycling é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários.',
            picture: tour04
        },
    ];


    const [actualScreen, setActualScreen] = useState(0);
    
    const scrollX = React.useRef(new Animated.Value(0)).current;

   

    return(
        <Box source={tour05} hasPadding >
                <Spacer size="20px"/>
          <Title color="light">
              {HelpTour[actualScreen]?.title}
          </Title>
                <Spacer size='50px' />
          <Cover source={HelpTour[actualScreen]?.picture} width="100%" height="300px"/>
                <Spacer size='50px' />
          <Text color="light"align hasPadding> 
          {HelpTour[actualScreen]?.desc}
          </Text>
          <Spacer size='50px'/>
          <Box align="center">
              <Spacer size='50px' />
          <Button  justify="center" radius size="92px" background={HelpTour[actualScreen]?.button} block 
         onPress={() => {
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
          <Text style={{left: 150}}color="light">@groupcyclingapp</Text> 

          <ScalingDot
            data={HelpTour}
            scrollX={scrollX}
            containerStyle={{
              top: 1000,
            }}
            inActiveDotColor={'#347af0'}
            activeDotColor={'#347af0'}
          />
           
        </Box>
    )
}
