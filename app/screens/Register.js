import React from 'react';
import { Button, TextInput, View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AppInput from '../components/AppInput';

import { setUserame, setEmail, setPassword, setConPassword, submitUserData, setIncrementCount } from '../redux/user-actions';

function Register() {
    const { username, email, password, conPassword, count } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor="gray" barStyle="light-content" />
                {/* <Text style={styles.btnText}>{count}</Text> */}
                <Text style={styles.btnText}>Register</Text>
                <View style={styles.inputContainer}>
                    <AppInput title='Enter username'
                        myFunc={(value) => dispatch(setUserame(value))} />
                    <AppInput title='Enter email'
                        myFunc={(value) => dispatch(setEmail(value))} />
                    <AppInput title='Enter password'
                        myFunc={(value) => dispatch(setPassword(value))} />
                    <AppInput title='Re-enter password'
                        myFunc={(value) => dispatch(setConPassword(value))} />
                </View>
                <View style={styles.btnContainer}>
                    <View style={styles.btnSubmit}>

                        <Button color='green' title='Submit' onPress={
                            () => {
                                const userData = {
                                    name: username,
                                    email: email,
                                    password: password
                                };
                                dispatch(submitUserData(userData));
                            }
                        } />
                    </View>
                    {/* <View style={styles.btnIncrement}>

                    <Button title='Increment' onPress={
                        () => {
                            dispatch(setIncrementCount(10));
                        }
                    } />
                </View> */}
                </View>


            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 120

    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    btnSubmit: {
        right: 10,
        width: '94%'
    },
    btnIncrement: {
        width: '40%'
    },
    btnText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
        bottom: 40,
        alignSelf: 'center'
    },
    inputContainer: {
        padding: 10
    },
});

export default Register;