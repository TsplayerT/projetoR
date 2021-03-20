import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CampaignsStackNavigator } from './screen/campaigns/CampaignsStackNavigator';
import { ProfileStackNavigator } from './screen/profile/ProfileStackNavigator';
import { SettingsStackNavigator } from './screen/settings/SettingstackNavigator';

const { Navigator, Screen } = createBottomTabNavigator();


export const BottomNavigator = () => (
  <Navigator tabBarOptions={{
    style: {
      backgroundColor: '#000000',
      paddingBottom: 12,
    },
    activeTintColor: '#FFFFFF'
  }} >
    <Screen name="Campaigns" component={CampaignsStackNavigator} options={{
      title: 'Campanhas'
    }} />
    <Screen name="Profile" component={ProfileStackNavigator} options={{
      title: 'Perfil'
    }} />
    <Screen name="Settings" component={SettingsStackNavigator} options={{
      title: 'Configurações'
    }} />
  </Navigator>
);