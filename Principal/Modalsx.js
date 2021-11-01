import React, { useState } from 'react';
import { StyleSheet, Button, View, Modal, Text, TextInput, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {useForm, Controller} from 'react-hook-form'
import {Picker} from '@react-native-picker/picker';
import { api } from '../services/sqlite/axios.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ModalComponent (props) {
    const {
        control,
        handleSubmit,
        formState: {errors, isValid}
      } = useForm({mode: 'onBlur'})

    const createEvent = async (data) => {
        const response = await api.post("events/create", {
            title: data.name,
            description: `Intensidade do treino: ${selectedIntensify}; Tipo de estrada: ${selectedtyperote}; Tipo de bike: ${selectedbike} e estilo de encontro: ${selectedmeeting}.`,
            origin: props.pointers.origin,
            destination: props.pointers.destination
        }, { headers: { "X-access-token": await AsyncStorage.getItem("token") } });

        console.log(response.data);
    };

    const onSubmit = (data) => {
        
        createEvent(data);
        setModalVisible(false)
    };

    const { register, formState: { error } } = useForm();

    const [ModalVisible, setModalVisible] = React.useState(true);
    const [text, setText] = React.useState('');
    const [estilo, setEstilo] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [selectedIntensify, setSelectedIntensify] = useState('Suave')
    const [intensify] = useState(
        [
        'Suave',    
        'Moderado',
        'Intenso',
        ]
    );

    const [selectedtyperote, setSelectedTyperote] = useState('Estrada')
    const [type] = useState(
        [
        'Estrada', 
        'Trilha',
        'Ambas'
        ]
    )

    const [selectedbike, setSelectedbike] = useState('Speed')
    const [bike] = useState(
        [
        'Speed',
        'Mountain Bike',
        'Ambas'
        ]
    )

    const [selectedmeeting, setSelectedmeeting] = useState('Passeio')
    const [meeting] = useState(
        [
            'Passeio',
            'Treino'
        ]
    )
    console.log(props.pointers)
    return(
        <View style={styles.container}>
            <Modal
            transparent={true}
            visible={ModalVisible}
            animationType="fade"
            >

            <KeyboardAvoidingView style={{top:495}}>
            <SafeAreaView >
                <Controller
                    control={control}
                    name='name'
                    render={({field: {onChange, value, onBlur}}) => (
                    <>      

                            <Text style={{marginVertical: 10, marginLeft: 5}}>Tipo de Rota:</Text>
                            <Picker
                            
                            selectedValue={selectedtyperote}
                            onValueChange={(itemVal) => {
                                setSelectedTyperote(itemVal)
                            }}
                            >
                                {
                                    type.map((t) => (
                                        <Picker.Item label={t} value={t} />
                                        ))
                                }
                            </Picker>

                            <Text style={{marginVertical: 20, marginLeft:5 }}>Tipo de bike:</Text>
                            <Picker
                            style={{bottom: 10}}
                            selectedValue={selectedbike}
                            onValueChange={(itemVal) => {
                                setSelectedbike(itemVal)
                            }}
                            >
                                {
                                    bike.map((b) => (
                                        <Picker.Item label={b} value={b} />
                                        ))
                                }

                            </Picker>
                            <Text style={{marginVertical: 20, marginLeft:5 }}>Estilo de encontro:</Text>
                            <Picker
                            style={{bottom: 10}}
                            selectedValue={selectedmeeting}
                            onValueChange={(itemVal) => {
                                setSelectedmeeting(itemVal)
                            }}
                            >
                                {
                                    meeting.map((e) => (
                                        <Picker.Item label={e} value={e} />
                                        ))
                                }
                            </Picker>
                            
                            <Text style={{marginVertical: 20, marginLeft:5 }}>Intensidade:</Text>
                            <Picker
                            style={{ marginVertical: 20, bottom: 25}}
                            selectedValue={selectedIntensify}
                            onValueChange={(itemVal) => {
                                setSelectedIntensify(itemVal);
                            }} 
                            >
                            {
                                intensify.map((l) => (
                                    <Picker.Item label={l} value={l} />
                                ))
                            }
                            </Picker>

                            <TextInput
                                style={{marginVertical: 20, marginLeft: 5, color:'black'}}
                                placeholder='Título'
                                placeholderTextColor='gray'
                                value={value}
                                onChangeText={ value => onChange(value)}
                            />    
                            
                            </>
	)}
/>

            <Button color='green' title='concluir' onPress={handleSubmit(onSubmit)} disabled={!isValid}/>
            </SafeAreaView>
            </KeyboardAvoidingView>

            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-end",

    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'flex-end'

      },
    root: {
        flex: 1,
        flexDirection: "row",
        top: 500

      },
    textBoxAndInputBox: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",

      }
})


export default ModalComponent;