import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Toast = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={[styles.container, { display: visible ? 'flex' : 'none' }]}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    text: {
        color: 'white',
    },
});

export default Toast;
