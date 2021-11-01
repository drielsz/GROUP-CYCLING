import styled from 'styled-components/native';
import {colors} from './colours';

export const LoginButton = styled.TouchableOpacity`
    width: 230px;
    height: 55px;
    border-radius: 15px;
    align-items:center;
    justify-content: center;
    background-color: ${colors.primary};
    margin-top: 200px;
    align-self: center;
`
export const NameButton = styled.Text`
    color: ${colors.namebutton};
    font-weight: bold;
`
export const SignUp = styled.TouchableOpacity`
    color: ${colors.primary};
    font-weight: bold;
`

export const TextSignUp = styled.Text`
    color: ${colors.primary};
    font-weight: bold;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderbottom};
    left: 1px;
    top: 3px;
`
export const TextNoAccount = styled.Text`
    color: ${colors.blind};
    align-self: center;

`
export const TextForgetPassword = styled.Text`
    color: ${colors.primary};
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderbottom};
    align-self: flex-end;
    font-weight: bold;
    top: 120px;
    right: 5px;

` 

export const TextOR = styled.Text`
    color: ${colors.blind};
    align-self: center;
    font-weight: bold;
    top: 10px;
`

export const TextGroupCycling = styled.Text`
    color: ${colors.blind};
    font-size: 45px;
    align-self: center;
    font-weight: bold;
    top: 28px;
    text-transform: uppercase;
`

export const Cover = styled.ImageBackground.attrs( props =>({
    resizeMode: props.mode || 'contain',
   }))`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100px'};
    max-height: ${(props) => props.height || '100px'};
    min-height: ${(props) => props.height || '100px'};
    margin: ${(props) => props.spacing || '0px'};
    top: ${(props) => props.top || '30px'};
    left: ${(props) => props.left || '10px'};
    right: ${(props) => props.right || '10px'}
   `;

export const ViewCover = styled.View`
    flex-direction: row;
    align-self: center; 
    justify-content: space-between;
`;