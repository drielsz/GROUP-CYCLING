import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles2';
import Logo from '../assets/layout.png';

function Header3 () {
  return(
    <Container>
      <Image 
        source={Logo}
      />
    </Container>
  )
}

export default Header3;
