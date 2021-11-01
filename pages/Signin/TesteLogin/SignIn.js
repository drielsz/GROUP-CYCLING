import { api } from '../../../services/sqlite/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignIn = async ({navigation}) => {
    const response = await api.post("login", {
      email: email,
      password: senha
    }).then(async (response) => {
    {/*Guardando o token de acesso localmente */} 
      await AsyncStorage.setItem("token", response.data.token);

    {/* Enviando o usuário para a tela principal e resetando o index*/} 
      navigation.reset({
        index: 0,
        routes: [{name:"Principal"}] 
      })
    }).catch((error) => {
      console.log(error.response.data);
    });
   
  };

export default SignIn;