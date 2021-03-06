import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Styles, ColorMediumGray } from '../styles';
import { HomeScreen } from '../screen/main/home';
import { CampaignScreen } from '../screen/main/campaign';
import { ProfileScreen } from '../screen/main/profile';
import { SettingsScreen } from '../screen/main/settings';

import SwitchNavigator from '../components/SwitchNavigator';

const Stack = createStackNavigator();

export function MainContainer() {
    return (
        <SwitchNavigator type="dm" />
    );
}