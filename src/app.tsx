import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import SwitchNavigator, { navigatorType } from './components/SwitchNavigator';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

export const App: React.FC = () => {
  const [type, setType] = useState<navigatorType>('player');

  useEffect(() => {
    setType('dm');
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <SwitchNavigator type={type} />
    </>
  );
};

registerRootComponent(App);
