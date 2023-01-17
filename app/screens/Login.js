import React, { useEffect } from 'react';
import { Alert, Button, ImageBackground, Text, TextInput, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCities, setAge, setName, postUserData } from '../redux/actions';

function Login(props) {
    const { name, age, cities, userData } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    // call function 
    useEffect(() => {
        dispatch(getCities());
    }, []);

    // inside this function call to the action creaters
    const setData = async () => {
        const data = {
            name: name,
            age: age,
        }
        dispatch(postUserData(data));
    }

    // user interface of the application
    return (
        <ScrollView >
            <FlatList
                data={cities}
                renderItem={({ item }) => <View >
                    <Text style={styles.text}>{item.email}</Text>
                    <Text style={styles.text}>{item.phone}</Text>
                </View>}
                keyExtractor={item => item.id}
            />
            {/* <Text>Redux</Text>
            <TextInput
                placeholder='Enter your name'
                onChangeText={(value) => dispatch(setName(value))}
            >
            </TextInput>
            <TextInput
                placeholder='Enter your age'
                onChangeText={(value) => dispatch(setAge(value))}
            >
            </TextInput>
            <Button title='submit' onPress={setData} /> */}
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, padding: 5 }}>
                <View style={{ flex: 0.7 }}>
                    <Text>
                        Hello This is long bit of text that will fill up the entire
                        column to see how the text will wrap
                    </Text>
                </View>

                <View style={{ flex: 0.3 }}>
                    <Text>Hello Again</Text>
                </View>

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        top: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        width: '100%',
        height: 100,
        color: 'green',
        fontWeight: 'bold',

    }
});

export default Login;