import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Account({ name, title, color }) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
            <Icon style={styles.accIcon} name={name} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 135,
        height: 45,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    accIcon: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 10,
    }
});

export default Account;