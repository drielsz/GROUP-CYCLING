import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { TextInput } from 'react-native-paper';


import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { LinearGradient } from 'expo-linear-gradient';


import { MyInput } from './RenderInput';
import { SignIn } from './SignIn'

import GOOGLEIMAGE from '../../../assets/GOOGLETEST06.png';
import FACEBOOKIMAGE from '../../../assets/FACEBOOKTESTE01.png';

import {
  LoginButton, 
  NameButton, 
  SignUp, 
  TextSignUp, 
  TextNoAccount,
  TextForgetPassword,
  TextOR,
  TextGroupCycling,
  Cover,
  ViewCover
} from './styles';




const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;


export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    }
  };

  render() {
    return (
      <LinearGradient              
      start={{x: 0, y: 0.5}}
      colors={['#1D0D48', '#010003', ]}
      style={[s.body], {opacity:0.88}}>

        <View style={[s.container, s.w100, s.h100, s.justifyContentCenter]}>

          {/* IMAGE DO NOSSO PROJETO */}
          <Image 
            style={{width: 152, height: 149, alignSelf:'center'}} 
            source={require('../../../assets/logoxd.png')}/>
          
          {/* TEXTO */}
          <TextGroupCycling>group cycling</TextGroupCycling>

        {/* CAMPOS DE TEXTO, POSSIBILITANDO O USUARIO A ESCREVER E FAZER O POSSIVEL LOGIN NA PLATAFORMA. */}
          <TextInput 
           label='E-mail'
           style={{top: 86,}}
           mode='flat'
           value={this.state.email}
           onChangeText={value => this.setState({ email: value })}
           theme={{
            colors: {
                       placeholder: '#FF914D', text: '#FF914D', primary: '#FF914D',
                       underlineColor: '#FF914D', background: 'transparent',
                       selectionColor: '#FF914D', selectionColor: '#FF914D', outlineColor: '#FF914D'
               }
         }}
          />

          <TextInput 
           label='Senha'
           style={{top: 100,}}
           mode='flat'
           value={this.state.password}
           onChange={value => this.setState({ password: value })}
           theme={{
            colors: {
                       placeholder: '#FF914D', text: '#FF914D', primary: '#FF914D', 
                       underlineColor: '#FF914D', background: 'transparent',
                       selectionColor: '#FF914D', selectionColor: '#FF914D', outlineColor: '#FF914D'
               }
         }}
          />


         {/* SESSÃO QUE POSSIBILITA O USUARIO A RECUPERAR SUA SENHA */}
         <TextForgetPassword>Esqueceu sua senha?</TextForgetPassword>


         {/* SESSÃO DE LOGIN, COM UM TOUCHABLE OPACITY */}
          <LoginButton onPress={SignIn}>
            <NameButton>ENTRAR</NameButton>
          </LoginButton>


         {/* SESSÃO QUE POSSIBILITA O USUARIO RECUPERAR A CONTA*/}
          <TextNoAccount>Não possui conta?
            <SignUp>
              <TextSignUp>Cadastrar-se!</TextSignUp>
            </SignUp>
          </TextNoAccount>

         {/* TEXT */}
          <TextOR>______________________ Ou ______________________</TextOR>


        {/* IMAGES GOOGLE E FACEBOOK, FUTURAMENTE COM AS RELATIVAS FUNÇÕES DE LOGIN */}
        <ViewCover>
            <Cover source={FACEBOOKIMAGE} width='73px' height='75px' top='24px' left='-10px'/>
            <Cover source={GOOGLEIMAGE} width='73px' height='70px' top='26px' right='0px'/>
        </ViewCover>

        </View>
      </LinearGradient>
    );
  }
}
