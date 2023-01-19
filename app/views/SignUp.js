import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Inputes from '../components/Inputes';
import Submit from '../components/Submit';
import { setUserame, setEmail, setPassword, setConPassword, submitUserData, setIncrementCount, setPhone } from '../redux/user-actions';


function SignUp(props) {
    const { username, email, password, conPassword, count, phone } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.bodyContainer}>
                <Image source={require('../assets/Image.png')} resizeMode="center" style={styles.image} />
                <View style={styles.mainTitle}>
                    <Text style={styles.title}>Let's Get Started</Text>
                    <Text style={styles.bodyTitle}>Create an account to get all features</Text>
                </View>
                <Inputes name='Full Name' icon='user' myFunc={(value) => dispatch(setUserame(value))} />
                <Inputes name='Email' icon='envelope' myFunc={(value) => dispatch(setEmail(value))} />
                <Inputes name='Phone' icon='phone' myFunc={(value) => dispatch(setPhone(value))} />
                <Inputes name='Password' icon='lock' myFunc={(value) => dispatch(setPassword(value))} />
                <Inputes name='Confirm Password' icon='lock' myFunc={(value) => dispatch(setConPassword(value))} />
                <Submit color='#029904' title='Create' btnFunc={() => {
                    const userData = {
                        name: username,
                        email: email,
                        phone: phone,
                        password: password
                    };
                    dispatch(submitUserData(userData));
                }} />
                <View style={styles.doContainer}>
                    <Text style={styles.doText}>Already have an account?</Text>
                    <Text style={styles.regText}
                        onPress={() => props.navigation.navigate('Home')}
                    >Log In</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white'
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20
    },
    doContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    doText: {
        fontWeight: '400',
        fontSize: 16,
        right: 10
    },
    mainTitle: {
        bottom: 30
    },
    regText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#029904',
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    bodyTitle: {
        fontWeight: '500',
        fontSize: 16,
    },
});
export default SignUp;