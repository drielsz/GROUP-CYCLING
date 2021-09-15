import React from 'react';
import { 
    KeyboardView as View, 
    Container, 
    Buttons,
    SimpleText
} from './styles';
import  Header from '../../components/Header'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, Alert, } from 'react-native'
import {useState} from "react";
import firebase from '../../services/sqlite/Firebase';
import { LinearGradient } from 'expo-linear-gradient';
import * as Facebook from "expo-facebook";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 function Signin({navigation}) {
  
 
  
  

   const signUpFacebook = async () => {
     try {
      await Facebook.initializeAsync ({appId: '809931109676548', appName: 'GroupCycling'})
      const { 
            type,
            token,
            expires,
            permissions,
            decinedPermissions
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ["public_profile", "email"],
          });
          if (type === "success") {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
              `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
            );
            // console.log((await response.json()).name);
            const data = await response.json();
            setUser(data);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      };
      





  const [user, setUser] = useState('');
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const OnChangeEmail = (txtEmail) =>{
        setEmail(txtEmail)
  }
  const OnChangeSenha = (txtSenha) =>{
    setSenha(txtSenha)
}


  // const login = {
  //     usuario: '',
  //     senha: ''
  // }



  const Entrar = () => { 
    firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
      navigation.reset({
        index: 0,
        routes: [{name:"Principal"}] 
  })
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

  // useEffect(() => {
  //   NavigateToAuthORGroupScreen()
  // },[navigation])

  //  function NavigateToAuthORGroupScreen() {
  //    const {currentUser} = firebase.auth();
  //      if (currentUser != null ){
  //        navigation.reset({
  //          index:0,
  //          routes: [{name: "Principal"}]
  //        })
         
  //      } else{        
  //       navigation.reset({
  //         index:0,
  //         routes: [{name: "Signin"}]
  //       })
  //     }
  // }
  const Principal = () => { 
    navigation.navigate("Principal")
}
  
  const Perfil = () => {
    navigation.navigate("Perfil")
  }

  const Cadastro = () => { 
      navigation.navigate("TelaCadastro")
  }

  const RecoverGO = () => {
      navigation.navigate("Recover")
  }

  return (

    <ScrollView>
    <SafeAreaView>
        <View style={styles.container}>
          <View style={{flex:1}}>
          <Header  style={styles.header} />
          </View>
          <Container>
          <Buttons  style={[styles.buttonFace,]} onPress={signUpFacebook}  btnType="facebook" color="#4867aa" >
            <View style={styles.iconWrapper}>
          <FontAwesome  name="facebook"style={styles.icon} size={23} color='#fff'    /> 
          </View>
          <Text style={styles.textFacebook}>Continuar com o Facebook</Text>
          </Buttons>
          <Buttons style={styles.buttonGoogle}>
            <View style={styles.iconWrapperG}>
          <FontAwesome name="google" style={styles.iconGoogle} size={23} color={'#FF9052'}    />
          </View>
            <Text style={styles.textG}>Continuar com o Google</Text>
          </Buttons>
            <TextInput                
                 style={styles.textinput}
                 placeholderTextColor={'#FF9052'}
                 placeholder="E-mail:"
                 iconType="User"
                 value={email}
                 onChangeText = {txtEmail => OnChangeEmail(txtEmail)}
                 autoCorrect ={false}
                 keyboardType='email-address'
                 autoCapitalize='none'
                 autoCompleteType='email'
                 textContentType='emailAddress'
            />            
            <TextInput
                style={styles.SText}
                style={styles.textinput}
                placeholderTextColor={'#FF9052'}
                placeholder="Senha:"
                value={senha}
                onChangeText = {txtSenha => OnChangeSenha(txtSenha)}
                autoCapitalize='none'
                secureTextEntry
            />       
            <Text  onPress={() => RecoverGO()} style={styles.SText}>
            Esqueceu sua senha?
            </Text>
            <TouchableOpacity style={{borderRadius: 15, bottom:140,}} onPress={() => Entrar()}>
              <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#FF9052', '#FF4E4E', ]}
              style={styles.buttonS}>
              <Text style={styles.Atext}>ENTRAR</Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text onPress={() => Cadastro()} style={styles.SText}>
            Não tem conta? Crie uma conta
            </Text>    
             <SimpleText onPress={Principal}> Ir para Principal </SimpleText>               
          </Container>
        </View>
        </SafeAreaView>
        </ScrollView>
  ) 
};
export default Signin;


const styles = StyleSheet.create({
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

  buttonGoogle: {
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
    width: 400,
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
  buttonFace:{
    bottom: 160,
    backgroundColor: '#3b5998',
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
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFacebook: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  textG: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#141823',
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
  },
  SText: {
    bottom: 140,
    backgroundColor: 'transparent',
    fontSize: 19,
    color: '#FF9052',
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,

    
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
    bottom: 140,
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
  

  },
  buttonContainer:{
    marginTop: 10,
    width: '100%',
    height: 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
},
iconWrapper:{
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 150,
    top: 10,
},
icon:{
    fontWeight: 'bold',
    color: '#fff',
    top: 4,

},
btnTxtGoogle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
buttonGoogle:{     
  bottom: 160,
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
iconWrapperG:{
  width: 30,
  justifyContent: 'center',
  alignItems: 'center',
  right: 150,
  top: 9,
  color: '#FF9052',
},
iconGoogle:{
  fontWeight: 'bold',
  color: '#FF9052',
  top: 6,

},
buttonTextGoogle:{    
  
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
},
});