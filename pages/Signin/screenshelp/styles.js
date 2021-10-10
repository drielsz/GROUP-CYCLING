import styled from 'styled-components/native';
import { Title as TitlePaper, Text as TextPaper, Button as ButtonPaper } from 'react-native-paper';

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`

export const ImageBackground = styled.ImageBackground.attrs({
    
})`
    flex:1;
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: ${(props) => (props.justify || 'flex-start')};
    align-items: ${(props) => props.align || 'flex-start'}
    width: ${(props) => props.width || '100%'};

    max-width: ${(props) => props.width || '100%'};
    min-width: ${(props) => props.width || '100%'};

    height: ${(props) => props.height || 'auto'};
    max-height: ${(props) => props.height || 'auto'};
    min-height: ${(props) => props.height || 'auto'};

    padding: ${(props) => (props.hasPadding ? '20px' : '0px')};

    margin: ${(props) => props.spacing || 0}
    border-radius: ${(props) => (props.radius ? '3px' : '0px')};
    border: ${(props) => props.border || 'none'};

    background: ${(props) => 
        props.theme[props.background] || props.background || 'transparent'}
`

export const Title = styled(TitlePaper)`
    color: ${(props) => props.theme[props.color || 'dark']};
    font-size: ${(props) => (props.small ? '22px' : props.big ? '50px' : '35px')};
    line-height:${(props) => (props.small ? '22px' : props.big ? '50px' : '30px')};
    padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
    letter-spacing: -2px;
    font-weight: ${(props) =>(props.bold ? 'bold' : 'normal')};
    text-align: ${(props) => props.align || 'left'};
    transform: ${(props) => (props.scale ? `scale(${props.scale})` : '')};
    font-family: 'Ubuntu_700Bold';
    text-decoration: ${(props) => (props.decoration ? 'underline' : 'none')};
`

export const Cover = styled.ImageBackground.attrs( props =>({
 resizeMode: props.mode || 'contain',
}))`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100px'};
    max-height: ${(props) => props.height || '100px'};
    min-height: ${(props) => props.height || '100px'};
    margin: ${(props) => props.spacing || '0px'};
`;

export const Text = styled(TextPaper)`
    color: ${(props) => props.theme[props.color || 'muted']};
    font-size: ${(props) => (props.small ? '13px' : '17px')};
    line-height: ${(props) => (props.small ? '13px' : '20px')};
    font-family: ${(props) =>
        props.bold ? 'Ubuntu_700Bold' : 'Ubuntu_300Light'};
    margin: ${(props) => props.spacing || 0};
    padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
    opacity: ${(props) => props.opacity  || 0.7 }
    text-align: ${(props) => (props.align ? 'center' : 'left')};
    text-decoration: ${(props) => (props.decoration ? 'underline' : 'none')};
        

`;

export const Button = styled(ButtonPaper).attrs(props =>({
    mode: props.mode || 'contained',
    uppercase: true,
    width: props.block ? '60%' : 'auto',
    color: props.theme[props.background] || props.background || props.theme.primary,
    labelStyle:{
        color: props.theme[props.TextColor || 'light'],
        letterSpacing: props.letter ? 1 : 0,
        fontFamily: 'Ubuntu_400Regular',
    
    }
}))
`
height: ${(props) => props.size || '10px'};
border-radius: ${(props) => (props.radius ? '30px' : '0px')};
justify-content: ${(props) => (props.justify || 'center')};
align-items: ${(props) => props.align || 'center'};

`;