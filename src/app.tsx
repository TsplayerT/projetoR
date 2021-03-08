import 'react-native-gesture-handler';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container } from '../src/components/SwitchNavigator';

export const App: React.FC = () => (
  <>
    <StatusBar style="dark" />
    <Container/>
  </>
);

registerRootComponent(App);
