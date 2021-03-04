import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { CampaignScreen } from './screen/campaign';
import { InventoryScreen } from './screen/inventory';
import { ChatScreen } from './screen/chat';

const Stack = createStackNavigator();

export function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Campaign" mode="modal" headerMode="screen" screenOptions={{headerStyle: Styles.header, headerTintColor: 'white'}} >
                <Stack.Screen name="Campaign" component={CampaignScreen} />
                <Stack.Screen name="Home" component={InventoryScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
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
  
