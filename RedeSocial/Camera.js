import React, { UseState, useEffect }from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera'

export default function Kmera () {
    const [ type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHaspermission] = useState (null);

    useEffect(( ) => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHaspermission(status === 'granted');
      })()
    },[]);
    if (hasPermission === null){
        return <View/>
    }
    if (hasPermission === false){
        return <Text>Acesso negado</Text>
    }

    return(
        <SafeAreaView>
            <Camera
            style={{flex:1}}
            type={type}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})