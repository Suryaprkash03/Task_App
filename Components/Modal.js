import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const CustomModal = ({ visible, onClose }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text>This is a modal</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
});

export default CustomModal;
