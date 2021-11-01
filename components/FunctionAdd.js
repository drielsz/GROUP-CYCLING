import React, {useState} from 'react'
import {Text, View, Button} from 'react-native'


export default class FunctionAdd extends React.Component {
    state= {
        value: 0,
    }

    incrementValue = () => {
        this.setState({
            value: this.state.value + 1,
        })
        console.log("Value" + (this.state.value + 1))
    }

    render() {
        return(
            <View>
                <Text>{this.state.value}</Text>
                <Button onPress={this.incrementValue} title='Participe'/>
            </View>

        )   
    }       

}