import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

const Snackbar = ({ visible, message }) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    hideSnackbar();
                }, 2000);
            });
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const hideSnackbar = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
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

export default Snackbar;
