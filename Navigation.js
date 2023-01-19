import * as React from 'react';
import { NavigationContainer, NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './app/views/SignIn';
import SignUp from './app/views/SignUp';

const Stack = createNativeStackNavigator();
const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={SignIn} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;