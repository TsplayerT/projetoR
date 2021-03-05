import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Styles, ColorMediumGray, ColorDarkGray } from '../styles';
import { SceneScreen } from '../screen/game/character/scene';
import { InventoryScreen } from '../screen/game/character/inventory';
import { ChatClientScreen } from '../screen/game/character/chatClient';

const Tab = createMaterialTopTabNavigator();

export function CharacterGameContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Scene" tabBarOptions={{tabStyle: Styles.header, activeTintColor: ColorMediumGray, inactiveTintColor: ColorDarkGray}} >
                <Tab.Screen name="Scene" component={SceneScreen} />
                <Tab.Screen name="Home" component={InventoryScreen} />
                <Tab.Screen name="Chat" component={ChatClientScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}