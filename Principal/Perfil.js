import React, {useState, useEffect} from 'react'
import { SafeAreaView, ScrollView, Text, StyleSheet, View} from 'react-native';
import { Title, Spacer } from './styles'
import {widthPercentageToDP as wd, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign, Entypo, Feather, FontAwesome  } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase'

// undefined i not an object, firebase/auth

// Oxente, mas nem está sendo utilizado '*'

const Action=({icon, text, onPress}) =>{
  return(
    <>
    <View style={styles.action}  style={{justifyContent:'space-between'}}>
      <View >
        <View style={styles.iconContainer} color={'#fa4248'} center>
            <Feather onPress={onPress} name={icon} size={22} color={'#fa4248'} backgroundColor={'#fa4248'}/>
        </View>
        <Text style={styles.actionTitle}> {text} </Text>
        </View >
        <View  style={[styles.iconContainer, styles.chevronstyle]}>
        <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </>
  )
}

const Design=({icon, text, onPress}) =>{
  return(
    <>
    <View style={styles.action} style={{justifyContent:'space-between'}}>
      <View >
        <View style={styles.iconContainer} color={'#fa4248'} center>
            <FontAwesome onPress={onPress} name={icon} size={22} color={'#fa4248'} backgroundColor={'#fa4248'}/>    
        </View>
        <Text  onPress={onPress} style={styles.actionTitle}> {text} </Text>
        </View >
        <View  style={[styles.iconContainer, styles.chevronstyle]}>
        <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </>
  )
}


export default function Perfil ({route, navigation}) {


  const [currentuser, setCurrentUser] = useState()




  const NavigationSocial = () => {
    navigation.navigate("Social")
  }
  
  const DataEmail = firebase.auth().currentUser.email


  const data = firebase.auth().currentUser;


  const user_data = {
    "name": data.displayName,
    "email": data.email,
  }

  return(
    <SafeAreaView style={styles.container}>
      


      <Title>Account</Title>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 29}}
      >
        <View style={styles.profileInfos} >
          <View style={[styles.image]}/>
          <View style={styles.nameSection}>
            <Text style={styles.textname} name>{data.displayName}</Text>
            <Text style={styles.textemail} body>{DataEmail}</Text>
            
          </View>
        </View>

        <View style={styles.action}>
          <Spacer size='40px'/>
          <Action text='Edit Profile' icon={ 'edit-3' } />
          <Spacer size='40px'/>
          <Design text="Wish list " icon={ 'heart' } />
          <Spacer size='40px'/>
          <Action text='Atividade Semanal' icon={ 'activity' } />
          <Spacer size='40px'/>
          <Action text='Treinos Salvos' icon={ 'star' } />
          <Spacer size='40px'/>
          <Action text='Conquistas' icon={ 'award' } />
          <Spacer size='40px'/>
          <Action text='Treinos curtidos' icon={ 'thumbs-up'  } />
          <Spacer size='40px'/>
          <Action text='Marketplace' icon={ 'shopping-bag' } />
          <Spacer size='40px'/>
          <Action text='Settings' icon={ 'settings' } />
          <Spacer size='40px'/>
          <Action onPress={NavigationSocial} text='Social' icon={ 'navigation' } />
          <Spacer size='40px'/>
          <Action text='Sair' icon={ 'log-out' } />
        </View>
       
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  profileInfos:{
    marginTop: 16,
    paddingHorizontal: 5,
  },
  image:{ 
    top: 15,
    left: wd(8),
    width: wd(35),
    height: hp(17.2),
    borderRadius: 200,
    borderColor: '#dddddd',
    borderWidth: wd(1),
    backgroundColor: '#dcdcdc',
  },
  nameSection: {
    marginLeft: 40,
  },
  textname:{
    left: wd(42),
    bottom: hp(10),
    fontWeight: 'bold',
    fontSize: 20
  },
  textemail:{
    left: wd(40),
    bottom: hp(10),
    color: 'gray',
  },
  action:{
    
    marginTop: 29,
    paddingHorizontal: 15,
  },
  iconContainer:{
    position: 'absolute',
    width: wd(40),
    height: hp(40),
    borderRadius: 6,
    
  },
  actionTitle:{

    marginLeft: 40,
  },
  chevronstyle:{  
    marginLeft: 440,
  },

})