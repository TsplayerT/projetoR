import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from './index';
const { Navigator, Screen } = createStackNavigator();

export const ProfileStackNavigator = () => (
  <Navigator >
    <Screen name="ProfileIndex" component={ProfileScreen} options={{
      title: 'Perfil',
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