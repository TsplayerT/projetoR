import 'react-native-gesture-handler';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React  from 'react';
import { Provider } from './api/sharer';
import { StatusBar } from 'expo-status-bar';
import Container from './components/switchNavigator';

export const App: React.FC = () => (
  <Provider>
    <StatusBar style="dark" />
    <Container/>
  </Provider>
);

registerRootComponent(App);
