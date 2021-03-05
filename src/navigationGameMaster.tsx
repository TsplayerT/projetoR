import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { TheaterScreen } from './screen/game/master/theater';
import { ArsenalScreen } from './screen/game/master/arsenal';
import { ChatServerScreen } from './screen/game/master/chatServer';

const Stack = createStackNavigator();

export const MasterGameContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Theater" mode="modal" headerMode="screen" screenOptions={{headerStyle: Styles.header, headerTintColor: 'white'}} >
        <Stack.Screen name="Theater" component={TheaterScreen} />
        <Stack.Screen name="Arsenal" component={ArsenalScreen} />
        <Stack.Screen name="Chat" component={ChatServerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
    letterSpacing: 2
  },
  header: {
    backgroundColor: 'rgb(30, 30, 30)'
  },
  screen: {
    flex: 1,
    backgroundColor: 'rgb(60, 60, 60)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cinzaClaro: {
    backgroundColor: 'rgb(90, 90, 90)'
  },
  cinzaMedio: {
    backgroundColor: 'rgb(60, 60, 60)'
  },
  cinzaEscuro: {
    backgroundColor: 'rgb(30, 30, 30)'
  }
});
  
