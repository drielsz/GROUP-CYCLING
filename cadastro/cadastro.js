
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, 
  ScrollView, 
  Text, 
  StyleSheet, 
  View, 
  TextInput,
  TouchableOpacity 
} from 'react-native'

import { 
    KeyboardView2, 
    PopupPassword,
    Buttons
} from './styles2';
import firebase from '../services/sqlite/FireBase'
import { getAuth, sendEmailVerification } from "firebase/auth";
import  Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient';


function TelaCadastro({navigation}) {

  const [nome, setNome] = useState("");
  const [email, setUsuario] = useState("");
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

  const Inscrever = () => { 
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
      navigation.reset({
        index: 0,
        routes: [{name:"FinCadastro"}]

    })
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ...
      });
    })
    }
  

  return (
    <SafeAreaView>
            <ScrollView>
            <KeyboardView2>  
            
           
            <Header />
            

            <View style={styles.regform}>
            
     

              <TextInput style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "Seu nome:"
                onChangeText = {(text) => {setNome(text)}}
                onBlur = {VerificaCampos}
              />
              <TextInput style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "E-mail:"
                onChangeText = {(text) => {setUsuario(text)}}
                onBlur = {VerificaCampos}
              />
              <TextInput style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "Senha:"
                onChangeText = {(text) => {setSenha(text)}}
                onBlur = {VerificaSenha}
                secureTextEntry
              />
              <TextInput style={styles.textinput} 
                placeholderTextColor = "#FF9052"
                placeholder = "Repita a sua senha:"
                onChangeText = {(text) => {setRSenha(text)}}
                onBlur = {VerificaSenha}
                secureTextEntry
              />

              <PopupPassword>
                {popupPass}
              </PopupPassword>

              </View>


              <TouchableOpacity style={{borderRadius: 15}} >
              <LinearGradient 
                // Button Linear Gradient
                colors={['#4267B2','#4267B2', '#4267B2' ]}
                style={styles.button}>
                
                <Text style={styles.text}>Cadastrar com o Facebook</Text>
                </LinearGradient>
                </TouchableOpacity>

                <Buttons style={styles.button}>
                <Text style={styles.textD}>
                  Cadastrar com o Google
                </Text>               
                </Buttons>

              <TouchableOpacity style={{borderRadius: 15}} onPress={() => Inscrever()}>
              <LinearGradient
              // Button Linear Gradient
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
        alignSelf: 'stretch',
        paddingLeft: 3,
    },
    header: {
        fontSize: 24,
        color: '#f5f5f5',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#FF9052',
        borderBottomWidth: 1,
    },
    textinput: {
        color: "#f5f5f5",
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
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
    
      buttonS: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 450,
        height: 90,    
        marginBottom: 30,
        borderStyle: 'solid',
        shadowColor: "#07111F",
        shadowOffset: {
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
      },
    // btn-cadastrar {
    //   color: var(--cor-texto-principal);
    //   border: 0px solid;
    //   border-radius: 5px;
    //   background: var(--cor-fundo);
    //   font-size: var(--text-24px);
    //   padding: var(--padding-0-5);
      
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
      header: {
      
        width: 30,
      height: 24,
      
    
      }
    });
    
    
    //#FF9052, #FF4E4E
    
    //#07111F, #172B49

    // autoCorrect ={false}
    // keyboardType='email-address'
    // autoCapitalize='none'
    // autoCompleteType='email'
    // textContentType='emailAddress'


