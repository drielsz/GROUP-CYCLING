import React from 'react'
import { SafeAreaView, ScrollView, Text, StyleSheet, View} from 'react-native';
import { Title } from './styles'
import {widthPercentageToDP as wd, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign, Entypo, Feather, Fontisto  } from '@expo/vector-icons'; 

const Action=({icon, text, screen}) =>{
  return(
    <>
    <View style={styles.action} row aCenter style={{justifyContent:'space-between'}}>
      <View row aCenter>
        <View style={styles.iconContainer} color={'#fa4248'} center>
            <Feather name={icon} size={22} color={'#fa4248'} backgroundColor={'#fa4248'}/>
            
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
const Whatever=({icon, text, screen}) =>{
  return(
    <>
    <View style={styles.action} row aCenter style={{justifyContent:'space-between'}}>
      <View row aCenter>
        <View style={styles.iconContainer} color={'#fa4248'} center>
            <Fontisto name={icon} size={20} color={'#fa4248'} backgroundColor={'#fa4248'}/>
            
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
export default function Perfil ({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      
      <Title>Account</Title>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 29}}
      >
        <View style={styles.profileInfos} row aCenter>
          <View style={[styles.image]}/>
          <View style={styles.nameSection}>
            <Text style={styles.textname} username>Adriel Laurentino</Text>
            <Text style={styles.textemail} body>noreply@gmail.com</Text>
          </View>
        </View>
        <View style={styles.action}>
          <Action text='Edit Profile'   icon={ 'edit-3'  }  />
          <Action text="Wish list "     icon={  'heart'  }  />
          <Action text='Atividade Semanal' icon={ 'activity'  }  />
          <Action text='Treinos Salvos' icon={ 'star'  }  />
          <Action text='Conquistas'     icon={ 'award'  }  />
          <Action text='Treinos curtidos' icon={ 'thumbs-up'  }  />
          <Action text='Marketplace' icon={'shopping-bag'} />
          <Action text='Sair' icon={ 'log-out'  }  />
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
    left: wd(47),
    bottom: hp(10),
    fontWeight: 'bold',
    fontSize: 20
  },
  textemail:{
    left: wd(47),
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