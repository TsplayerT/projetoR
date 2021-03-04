import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { LoginScreen } from './screen/main/login';
import { CampaignScreen } from './screen/main/campaign';
import { ProfileScreen } from './screen/main/profile';
import { SettingsScreen } from './screen/main/settings';

const Stack = createStackNavigator();

export function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" mode="modal" headerMode="screen" screenOptions={{headerStyle: Styles.header, headerTintColor: 'white'}} >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Campaign" component={CampaignScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const Styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: '400',
        fontSize: 20,
        letterSpacing: 2
    },
    header: {
        backgroundColor: 'rgb(30, 30, 30)'
    },
    screen: {
        flex: 1,
        backgroundColor: 'rgb(60, 60, 60)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cinzaClaro: {
        backgroundColor: 'rgb(90, 90, 90)'
    },
    cinzaMedio: {
        backgroundColor: 'rgb(60, 60, 60)'
    },
    cinzaEscuro: {
        backgroundColor: 'rgb(30, 30, 30)'
    }
});
  
