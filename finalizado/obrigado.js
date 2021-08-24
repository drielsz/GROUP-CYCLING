import React from 'react'
import { View, } from 'react-native'
import {
     KeyboardView,
     Text,
     Title,
     ButtonSubmit,
     TextButton
} from './styles';
import Header3 from '.';




function FinCadastro ({navigation}) { 

      const Voltar = () => { 
            navigation.navigate("Signin")
          }
      
      return(
            <KeyboardView>
                 
                <Title>
      OBRIGADO POR SE CADASTRAR!
                </Title>
                <Header3/>
                <Text>
Estamos quase finalizando, mas ainda precisamos confirmar o seu endereço de email.

Para completar sua inscrição, clique no link no email que acabamos de enviar.
                </Text>
                
              <ButtonSubmit onPress={() => Voltar()}>
              <TextButton>
                  Voltar para a página inicial
              </TextButton>
            </ButtonSubmit>


            </KeyboardView>
            
        
      )
}
export default FinCadastro;
