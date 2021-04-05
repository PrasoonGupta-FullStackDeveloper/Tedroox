import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import List from '../screens/List';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="List"
                component={List}
            />
            <Stack.Screen
                name="Details"
                component={Details}
            />
        </Stack.Navigator>
    );
};

export default Navigator;