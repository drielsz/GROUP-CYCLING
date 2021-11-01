import * as React from 'react';
import {View, Text} from 'react-native'
import { TextInput } from 'react-native-paper';

export default function MyInput (props) {
  const [text, setText] = React.useState('');

  const MyText = ( ) => {
   return (
    <TextInput
    label="Email"
    value={text}
    onChangeText={text => setText(text)}
  />
   )
  } 

return (
    <MyText/>
)

}
