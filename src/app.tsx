import 'react-native-gesture-handler';
import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screen/HomeScreen';
import { LoginScreen } from './screen/LoginScreen';

const Stack = createStackNavigator();

export const App: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
