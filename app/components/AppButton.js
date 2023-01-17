import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function AppButton({ myFunc, btnText, color = 'green' }) {
    return (
        <TouchableOpacity onPress={myFunc} style={[styles.increment, { backgroundColor: color }]}>
            <View >
                <Text style={styles.text}>{btnText}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    increment: {
        width: '100%',
        height: 40,
        backgroundColor: 'green',
        marginBottom: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

});
export default AppButton;