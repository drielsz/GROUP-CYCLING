import React from 'react';
import { StyleSheet, Button, View, Modal } from 'react-native';

function ModalComponent ( ) {

    const [ModalVisible, setModalVisible] = React.useState(false);
    return(
        <View>
            <Modal
            transparent={true}
            visible={ModalVisible}
            animationType="fade"
            >
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center", 
        justifyContent: "center"
    }
})


export default ModalComponent;