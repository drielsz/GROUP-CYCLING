
import Map from '../config'
import firebase from '../services/sqlite/FireBase'
import * as React from 'react';


const Principal = ({navigation}) => (
      <Map>
      
      </Map>
);

signOutUser = async () => {
      try{
            await firebase.auth().signOut()
            navigation.reset({
                  index: 0,
                  routes: [{name:"Signin"}]
            })
      }catch(e){
            console.log(e)
      }
}

export default Principal;