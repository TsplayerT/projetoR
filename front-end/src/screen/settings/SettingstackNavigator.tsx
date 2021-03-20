import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from './index';
const { Navigator, Screen } = createStackNavigator();

export const SettingsStackNavigator = () => (
  <Navigator >
    <Screen name="SettingsIndex" component={SettingsScreen} options={{
      title: 'Configurações',
      headerStyle: {
        backgroundColor: '#121212'
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }} ></Screen>
  </Navigator>
);