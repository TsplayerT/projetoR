import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CampaignScreen from '../../screen/main/campaign';
import HomeScreen from '../../screen/main/home';

export type navigatorType = 'player' | 'dm';

interface SwitchNavigatorPros {
  type: navigatorType;
}

const Stack = createStackNavigator();

const SwitchNavigator: React.FC<SwitchNavigatorPros> = (props: SwitchNavigatorPros) => {
  const playerNavigation = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  const dmNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Campaign" >
        <Stack.Screen name="Campaign" component={CampaignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return props.type === 'player' ? playerNavigation() : dmNavigator();
};

export default SwitchNavigator;