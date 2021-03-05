import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Styles, ColorMediumGray } from '../styles';
import { HomeScreen } from '../screen/main/home';
import { CampaignScreen } from '../screen/main/campaign';
import { ProfileScreen } from '../screen/main/profile';
import { SettingsScreen } from '../screen/main/settings';

const Stack = createStackNavigator();

export function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="screen" screenOptions={{headerStyle: Styles.header, headerTintColor: ColorMediumGray}} >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Campaign" component={CampaignScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}