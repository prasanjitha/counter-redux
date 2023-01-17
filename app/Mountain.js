import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AppButton from './components/AppButton';
function Mountain(props) {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    // const [count, setcount] = useState(0);
    return (
        <View style={styles.counter}>
            <Text style={styles.count}>{count}</Text>
            <AppButton myFunc={() => dispatch({ type: 'INCREMENT', value: 1 })} btnText="Increment" />
            <AppButton myFunc={() => dispatch({ type: 'DECREMENT', value: 1 })} btnText="Decrement" color='red' />
            <AppButton myFunc={() => dispatch({ type: 'RESET', value: 1 })} btnText="Reset" color='blue' />
            <AppButton myFunc={() => dispatch({
                type: 'SUBMIT', value: {
                    userName: 'kamal',
                    email: 'kamal@gmail.com'
                }
            })} btnText="Submit" color='gray' />


        </View>
    );
}
const styles = StyleSheet.create({
    counter: {
        top: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    count: {
        fontSize: 24,
        fontWeight: 'bold',
        bottom: 20,
    }

});

export default Mountain;