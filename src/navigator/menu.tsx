import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../screen/menu/login';
import { IndexScreen } from '../screen/menu/index';

const Stack = createStackNavigator();

export function MenuContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index" headerMode="none" >
                <Stack.Screen name="Index" component={IndexScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
