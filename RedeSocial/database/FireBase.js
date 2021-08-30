import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

class Fire {
  constructor() {
    this.state = { 
       
    };

    this.init()
    this.checkAuth()

  }


    init = () => {
      if (!firebase.apps.length){
        firebase.initializeApp({
          apiKey: "AIzaSyBEKq6bcxrb_E8FUQ_9E54OY5LKXocduik",
          authDomain: "groupciclying.firebaseapp.com",
          projectId: "groupciclying",
          storageBucket: "groupciclying.appspot.com",
          messagingSenderId: "472733815840",
          appId: "1:472733815840:web:ad07673c86755d3c4ed845",
          measurementId: "G-E0FN6928PJ",
          databaseURL: "https://groupciclying-default-rtdb.firebaseio.com/"
        });
      }else {
        firebase.app();
      }
    };
    
    checkAuth = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          firebase.auth().signInAnonymously();
        }
      })
    };

    send = messages => {
      messages.forEach(item =>{
        const message = {
          text: item.text,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          user: item.user 
        }
        this.db.push(message)
      })
    };
    
    parse = message => {
      const {user, text, timestamp} = message.val()
      const {key: _id} = message
      const createdAt = new Date(timestamp)

      return {
        _id,
        createdAt,
        text, 
        user, 
      }
    };
    
    
    
    get = callback => {
      this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
      
    };
    
    off() {
      this.db.off() 
    }
    get db () {
      return firebase.database().ref("messages");
    }
    get uid(){
      return(firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();