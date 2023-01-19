import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../components/Account';
import Inputes from '../components/Inputes';
import Submit from '../components/Submit';
import { firebase } from '../config/firebase';

import { setEmail, setPassword, userLogin } from '../redux/user-actions';

function SignIn(props) {

    const { email, password } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();
    const login = async (email, password) => {
        console.log('call')
        await firebase.auth().signInWithEmailAndPassword(email, password);
        props.navigation.navigate('SignUp')
        console.log('end')

    };
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.bodyContainer}>
                <Image source={require('../assets/Image.png')} resizeMode="center" style={styles.image} />
                <Text style={styles.title}>Welcom Back</Text>
                <Text style={styles.bodyTitle}>Log in to your exsitant account</Text>
                <View style={styles.space} />
                <Inputes name='Email' icon='user' myFunc={(value) => dispatch(setEmail(value))} />
                <Inputes name='Password' icon='lock' pass={true} myFunc={(value) => dispatch(setPassword(value))} />
                <View style={styles.fpContainer}>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </View>
                <Submit color='#029904' title='LOG IN' btnFunc={() => {
                    const userData = {
                        email: email,
                        password: password
                    };
                    dispatch(userLogin(userData, props));

                }
                } />
            </View>
            <Text style={styles.coText}>Or connect using</Text>
            <View style={styles.socialContainer}>
                <Account color='#3b5c8f' name='facebook' title='Facebook' />
                <Account color='#ec482f' name='google' title='Google' />
            </View>
            <View style={styles.doContainer}>
                <Text style={styles.doText}>Don't have an account?</Text>
                <Text style={styles.regText}
                    onPress={() => props.navigation.navigate('SignUp')}
                >Sign Up</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10

    },
    bodyTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    coText: {
        alignSelf: 'center'
    },
    doContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
    },
    doText: {
        right: 10,
    },
    fpContainer: {
        width: '100%'
    },
    fpText: {
        alignSelf: 'flex-end'
    },
    regText: {
        color: '#047d05',
        fontWeight: 'bold'
    },
    image: {
        width: 400,
        height: 250,
    },
    mainContainer: {
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'Foundation',
        fontSize: 40,
        fontWeight: 'bold',
    },
    space: {
        marginTop: 20
    },
    socialContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    }
});
export default SignIn;