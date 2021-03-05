import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Styles, ColorMediumGray, ColorDarkGray } from '../styles';
import { TheaterScreen } from '../screen/game/master/theater';
import { ArsenalScreen } from '../screen/game/master/arsenal';
import { ChatServerScreen } from '../screen/game/master/chatServer';

const Tab = createMaterialTopTabNavigator();

export function MasterGameContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Theater" tabBarOptions={{tabStyle: Styles.header, activeTintColor: ColorMediumGray, inactiveTintColor: ColorDarkGray}} >
                <Tab.Screen name="Theater" component={TheaterScreen} />
                <Tab.Screen name="Arsenal" component={ArsenalScreen} />
                <Tab.Screen name="Chat" component={ChatServerScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}