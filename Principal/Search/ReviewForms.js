import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';


export default function ReviewForm() {
    return(
        <View style={styles.container}>
            <Formik
            initialValues={{ title: '', body: '', rating: ''}}
            onSubmit={(values) => {
                console.log(values)
            }}
            >
                {(props)=>{
                    <View>
                        <TextInput
                          style={styles.textInput}
                          placeholder='Review title'
                          onChangeText={props.handleChange('title')}
                          value={props.values.title}      
                        />
                        <TextInput
                          multiline
                          style={styles.textInput}
                          placeholder='Review body'
                          onChangeText={props.handleChange('body')}
                          value={props.values.body}      
                        />
                         <TextInput
                          style={styles.textInput}
                          placeholder='Rating (1-5)'
                          onChangeText={props.handleChange('rating')}
                          value={props.values.rating}      
                        />
                        <Button title='submit' color='#800000' onPress={props.handleSubmit} />
                    </View>
                }}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: '#FFF',
        padding:10,
        fontSize: 18,
        borderRadius: 6,   
    },
    container:{
    
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
