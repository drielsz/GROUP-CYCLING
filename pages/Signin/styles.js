import styled from 'styled-components/native';



export const KeyboardView = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #0B1A36;
  
  `

  export const Title = styled.Text`
    color:  #FF8300;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    align-items: center;
  `

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    width: 90%;

`
export const TextButton = styled.Text`
    color: #f5f5f5;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
`

export const TextInput2 = styled.TextInput`
    border: 2px solid  #FF8300;
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #f5f5f5;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`
export const Buttons = styled.TouchableOpacity`
   

`

export const SimpleText = styled.Text`
    color: #f5f5f5;



`

export const Spacer = styled.View`
    width: 100%;
    height: ${(props) => props.size || '10px'};
`