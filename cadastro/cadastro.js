import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, 
  ScrollView, 
  Text, 
  StyleSheet, 
  View, 
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    KeyboardView2, 
    PopupPassword,
    Buttons
} from './styles';
import firebase from '../services/sqlite/Firebase'

import { getAuth, sendEmailVerification } from "firebase/auth";
import  Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient';


function TelaCadastro({navigation}) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rsenha, setRSenha] = useState("");

  const [popupPass, setPopupPass] = useState("");

  const VerificaSenha = () => {
    setPopupPass("");
    if (!([senha, rsenha].includes("")) && senha !== rsenha) setPopupPass("As senhas precisam ser iguais!");
    if (([nome, email, senha, rsenha].includes(""))) setPopupPass("Os campos não podem estar vazios!");
    
  }

    
  const VerificaCampos = () => {
    setPopupPass("");
    if (([nome, email, senha, rsenha].includes(""))) setPopupPass("Os campos não podem estar vazios!");
  }


  async function getAuth() {
      const user = firebase.auth().currentUser
      await user.sendEmailVerification();
  }
  


  const setfunction = () => {
    try{
      AsyncStorage.setItem('email', email)
    } catch(e){
      alert(e)
    }
  }

  /*
  const  getfunction = async() => {
    try{
     const valor = await AsyncStorage.getItem('email')
      setEmail(valor)
      console.log(`O email foi: ${valor}`)
      
    } catch(e){
      alert(e)
      console.log(` erro: ${e}`)
    }
  }
  */

  const Inscrever = () => { 
    firebase.auth().createUserWithEmailAndPassword(email, senha).then((user) => {
      user.user.updateProfile({ displayName: nome }); // Atualizando os dados do usuário cadastrado
      console.log(`<User(Email=${user.user.email})>`);

      navigation.reset({
        index: 0,
        routes: [{name:"Signin"}]
  })
      Alert.alert(`Olá ${ nome } `,
      `sua conta foi cadastrada com sucesso, verifique  seu e-mail ${email} para fazer o login`,
      [
        {text: 'OK', style: 'destructive'},
        ],
        {cancelable: true}
    ),
      getAuth()
    }).catch((e)=>{
      console.log('Recover', 'recover' + e);
      switch (e.code) {
        
        case 'auth/user-not-found':
          Alert.alert('Erro', 'Usúario não cadastrado.')
          break;

        case (email, senha == null):
          Alert.alert('Erro', 'Campos não preenchidos')  
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


  
  return (
    <SafeAreaView>
            <ScrollView>
            <KeyboardView2 >              
            <Header style={styles.header}/>      
            <View style={styles.regform}>

              <TextInput 
                style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "Nome e sobrenome:"
                onChangeText = {(text) => {setNome(text)}}
                value={nome}
                onBlur = {VerificaCampos}     
              />
              <TextInput 
                style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "E-mail:"
                onChangeText = {(text) => {setEmail(text)}}
                value={email}
                onBlur={VerificaCampos}
                autoCorrect ={false}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCompleteType='email'
                textContentType='emailAddress'
              />
              <TextInput 
                style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "Senha:"
                onChangeText = {(text) => {setSenha(text)}}
                onBlur = {VerificaSenha}
                secureTextEntry
                autoCapitalize='none'
              />
              <TextInput 
                style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "Repita a sua senha:"
                onChangeText = {(text) => {setRSenha(text)}}
                onBlur = {VerificaSenha}
                secureTextEntry
                autoCapitalize='none'
              />

              <PopupPassword>
                {popupPass}
              </PopupPassword>
              </View>

              {/* <TouchableOpacity style={{borderRadius: 15, bottom:160}} >
              <LinearGradient 
                colors={['#4267B2','#4267B2', '#4267B2' ]}
                style={styles.buttonface}>
                
                <Text style={styles.text}>Cadastrar com o Facebook</Text>
                </LinearGradient>
                </TouchableOpacity>

                <Buttons style={styles.button}>
                <Text style={styles.textD}>
                  Cadastrar com o Google
                </Text>               
                </Buttons> */}
              <TouchableOpacity style={{borderRadius: 15, bottom:120}} onPress={() => Inscrever()}>
              <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#FF9052', '#FF4E4E', ]}
              style={styles.buttonS}>
                
              <Text style={styles.Atext}>CADASTRAR-SE</Text>
              </LinearGradient>
              </TouchableOpacity>
          </KeyboardView2> 
          </ScrollView>
          </SafeAreaView>
  )
}

export default TelaCadastro;
 



const styles = StyleSheet.create({

    regform: {
        bottom: 180,
        alignSelf: 'stretch',
        paddingLeft: 3,
    },
    header: {
      bottom: 500,
    },
    textinput: {
        bottom: 420,
        color: "#f5f5f5",
        alignSelf: 'stretch',
        height: 40,
        borderBottomColor: '#FF9052',
        borderBottomWidth: 1,
    },
    btntext: {
      color: '#f5f5f5',
      fontWeight:'bold',
    },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0B1A36',
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        width: 191,
      },
    
      button: {
        bottom: 140,
        backgroundColor: '#FFFFFF',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 350,
        height: 60,    
        marginBottom: 30,
        borderStyle: 'solid',
        shadowColor: "#07111F",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 6,
    
      },
      buttonface: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 350,
        height: 60,    
        marginBottom: 30,
        borderStyle: 'solid',
        shadowColor: "#07111F",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 6,
    
      },
      buttonS: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 450,
        height: 80,    
        marginBottom: 30,
        borderStyle: 'solid',
        shadowColor: "#07111F",
        shadowOffset: {
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
      },     
      text: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
      },

      textD: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#141823',
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      SText: {
        backgroundColor: 'transparent',
        fontSize: 19,
        color: '#FF9052',
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 6,
        
      },
    
      Atext: {
        backgroundColor: 'transparent',
        fontSize: 25,
        color: '#172B49',
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      textinput: {
        fontSize: 18.5,
        color: "#FF9052",
        alignSelf: 'stretch',
        height: 40,
        marginTop: 10,
        marginBottom: 25,
        borderBottomColor: '#FF9052',
        borderBottomWidth: 1,
        
      },

    });
    
    
    //#FF9052, #FF4E4E
    
    //#07111F, #172B49

    // autoCorrect ={false}
    // keyboardType='email-address'
    // autoCapitalize='none'
    // autoCompleteType='email'
    // textContentType='emailAddress'


