import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';

import { DarkTheme } from './themes/DarkTheme';

import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from './BottomNavigator';

export default function App() {
  return (
    <ThemeProvider theme={DarkTheme} >
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

registerRootComponent(App);