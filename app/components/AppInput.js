import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

function AppInput({ title, myFunc }) {
    return (
        <TextInput
            onChangeText={myFunc}
            style={styles.input}
            placeholder={title}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 10,
        overflow: "hidden",
        height: 50,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        fontSize: 16,
    }
});

export default AppInput;