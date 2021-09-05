import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, Text,  LogBox,  } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'
import Fire from '../RedeSocial/database/FireBase'
import { useRoute } from '@react-navigation/native';

export default class SocialChat extends React.Component {

    constructor(props) {
        LogBox.ignoreLogs(['Setting a timer for a long period of time'])
        super(props);
        this.state = { 
            messages: [],
        };
    }

    get user () {  
        return{
            _id: Fire.uid,
            name: this.props.route.params?.name,
            
        };
         
    }
    
    componentDidMount() {
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        }))
      );
    }
    
    componentWillUnmount() {
        Fire.off()
    }

    render(){
        const  chat =  <GiftedChat messages={this.state.messages} onSend = {Fire.send} user={ this.user } />
        if (Platform.OS === 'android') {
            return(
                         
                <SafeAreaView style={{flex: 1}} behavior="padding" keyboardVerticallOffset={30} enabled>
                    {chat}
                </SafeAreaView>
        
            )   
        }

        return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
    }
}

