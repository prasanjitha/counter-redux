import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function Submit({ color, title, btnFunc }) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={btnFunc}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
    },
    title: {
        top: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',



    }
});
export default Submit;