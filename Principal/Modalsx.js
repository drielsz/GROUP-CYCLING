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
            description: selectedIntensify,
            origin: props.pointers.origin,
            destination: props.pointers.destination
        }, { headers: { "X-access-token": await AsyncStorage.getItem("token") } });

        console.log(response.data);
    };

    const onSubmit = (data) => {
        createEvent(data);

    };

    const { register, formState: { error } } = useForm();

    const [ModalVisible, setModalVisible] = React.useState(true);
    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [selectedIntensify, setSelectedIntensify] = useState('Suave')
    const [intensify] = useState(
        [
            'Suave',    
            'Moderado',
            'Intenso',
        ]
    );

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

                            <TextInput
                            style={{marginVertical: 20, marginLeft: 5}}
                            value={value}
                            onBlur={onBlur}
                            placeholder='Tipo de rota:'
                            placeholderTextColor='black'
                            onChangeText={value => onChange(value)}
                            />
                            <TextInput
                            style={{marginVertical: 20, marginLeft: 5}}
                            value={value}
                            onBlur={onBlur}
                            placeholder='Tipo de bike:'
                            placeholderTextColor='black'
                            onChangeText={value => onChange(value)}
                            />
                            <TextInput
                            style={{marginVertical: 20, marginLeft: 5}}
                            value={value}
                            onBlur={onBlur}
                            placeholder='Estilo de encontro:'
                            placeholderTextColor='black'
                            onChangeText={value => onChange(value)}
                            />
                            <Picker
                            style={{ marginVertical: 20}}
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
                            </>
	)}
/>

            <Button color='#0091E2' title='submit' onPress={handleSubmit(onSubmit)} disabled={!isValid}/>
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