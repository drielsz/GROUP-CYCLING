import StyleSheet from 'react-native'
import styled from 'styled-components/native';


export const Title = styled.Text`
    color:  #FF8300;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
    margin-Top: 30px;
`

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #0B1A36;


`

export const Text = styled.Text`
    color: #f5f5f5;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
    align-items: center;

`
export const Button = styled.TouchableOpacity`
    color: #f5f5f5;
    margin-bottom: 35px;
    margin-Top: 30px;
    align-items: center;
    width: 100%;
    padding: 25px;

`
export const TextButton = styled.Text`
    color: #f5f5f5;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    align-items: center;

`


export const KeyboardView2 = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #122a57;

  `


export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`