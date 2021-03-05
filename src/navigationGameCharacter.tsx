import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { SceneScreen } from './screen/game/character/scene';
import { InventoryScreen } from './screen/game/character/inventory';
import { ChatClientScreen } from './screen/game/character/chatClient';

const Stack = createStackNavigator();

export const CharacterGameContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scene" mode="modal" headerMode="screen" screenOptions={{headerStyle: Styles.header, headerTintColor: 'white'}} >
        <Stack.Screen name="Scene" component={SceneScreen} />
        <Stack.Screen name="Home" component={InventoryScreen} />
        <Stack.Screen name="Chat" component={ChatClientScreen} />
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
  
