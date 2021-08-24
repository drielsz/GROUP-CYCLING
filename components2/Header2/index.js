import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/fundo.png';

function Header2 () {
  return(
    <Container>
      <Image 
        source={Logo}
      />
    </Container>
  )
}

export default Header2;


