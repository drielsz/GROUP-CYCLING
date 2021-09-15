import React, {useState}from 'react';
import tour01 from '../../../assets/illustration-1.png';
import tour02 from '../../../assets/illustration-2.png';
import tour03 from '../../../assets/illustration-3.png';
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


export default function Helpscreen () {
    


    const HelpTour = [
        {   
            key:'1',
            bg: 'dark', 
            button: 'primary',
            title: 'Chega de Rotina sem a motivação.',
            desc: 'Pensamos em um serviço perfeito para você construir hábitos se divertindo e ganhando dinheiro.',
            picture: tour01
        },
        {
            key:'2',
            bg: 'primary', 
            button: 'dark',
            title: 'Construa hábitos por bem (ou mal).',
            desc: 'Pensamos em um serviço perfeito para você construir hábitos se divertindo e ganhando dinheiro.',
            picture: tour02
        },
        {
            key:'3',
            bg: 'dark', 
            button: 'primary',
            title: 'Ganhe dinheiro com  seus amigos.',
            desc: 'Pensamos em um serviço perfeito para você construir hábitos se divertindo e ganhando dinheiro.',
            picture: tour03
        },
    ];


    const [actualScreen, setActualScreen] = useState(0);
    
    const scrollX = React.useRef(new Animated.Value(0)).current;

   

    return(
        <Box background={HelpTour[actualScreen]?.bg} hasPadding justify='center'>
                <Spacer size="40px"/>
          <Title big color="light">
              {HelpTour[actualScreen]?.title}
          </Title>
                <Spacer size='50px' />
          <Cover source={HelpTour[actualScreen]?.picture} width="100%" height="300px"/>
                <Spacer size='50px' />
          <Text align hasPadding> 
          {HelpTour[actualScreen]?.desc}
          </Text>
          <Spacer size='50px'/>
          <Button background={HelpTour[actualScreen]?.button} block 
         onPress={() => {
             if (actualScreen === 2) {
                 goLogin();
               
                } else {
                    setActualScreen(() => actualScreen + 1 );
                 
                }
    
          }}
          >
          {actualScreen === 2 ? 'Explorar Desafio' : 'Próximo'}
          </Button>     
          <Text style={{ left: 150, top:130}}align color="light"> @groupcyclingapp</Text> 

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
