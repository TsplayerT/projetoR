import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CampaignsScreen } from './index';
const { Navigator, Screen } = createStackNavigator();

export const CampaignsStackNavigator = () => (
  <Navigator >
    <Screen name="CampaignsIndex" component={CampaignsScreen} options={{
      title: 'Campanhas',
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