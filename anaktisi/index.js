import * as React from 'react';
import { useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button,

} 
from 'react-native';
import 'firebase/auth';
import auth from '@react-native-firebase/auth'

const Recover = () => {
  const [email, setEmail] = useState('');
  const [isHungry, setIsHungry] = useState(true);


  const recover = ( ) => {
    alert(email)
    if(email !== ''){
      console.log(email);
      auth()
      .sendPasswordResetEmail(email)
      .then((r)=>{
        Alert.alert('Atenção', 'Enviamos um email de recuperação de senha para o seguinte email:'+ 
        email );
      })
      .catch((e)=>{
        console.log('Recover', 'recover' + e);
        switch (e.code) {
          case 'auth/user-not-found':
            Alert.alert('Erro', 'Usúario não cadastrado.')
            break;
          case 'auth/wrong-password':
            Alert.alert('Erro', 'Erro na senha.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Erro', 'Email inválido.');
            break;
          case 'auth/user-disabled':
            Alert.alert('Erro', 'Úsuario desabilitado.')
            break;
        }
      });
    }
  }
    return (
    <View style={styles.container}>    
      <Text style={styles.text}>   
        Bem vindo a tela de recuperação
      </Text>

      <TextInput style={styles.textsub}
      placeholder="Email:"
      value={email}
      placeholderTextColor={'#FF9052'}
      keyboardType="email-address"
      onChangeText={(t) => setEmail(t)}
      autoFocus={true}
      autoCapitalize='none'
      >
      </TextInput>

      <Button 
      onPress={recover}
      disabled={!isHungry}
      title={isHungry ? "Recuperar" : "OBRIGADO!"}
      color={'#FF8300'}
      />
    </View>



    );
  }
  

const styles = StyleSheet.create({

    container: {
      flex: 1, 
      backgroundColor: '#0B1A36',
      marginBottom: 10,
      padding: 20,
      alignItems: 'center',
    },

    text: {
      color: '#f5f5f5',
      marginBottom: 40,
      paddingTop: 10,
    },

    cu: {
      position: 'absolute', 
      left: 30,
    },

    textinput:{
      color: '#FF8300',
    },

    buttonstyle:{
      marginBottom: 10,
      width: 30,
    },

    textsub: {
      color: "#FF9052",
      alignSelf: 'stretch',
      height: 40,
      marginTop: 10,
      marginBottom: 25,
      borderBottomColor: '#FF9052',
      borderBottomWidth: 0.5,
      
    },



  })
  

export default Recover;