import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import SwitchNavigator, { navigatorType } from './components/SwitchNavigator';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

const App: React.FC = () => {
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

export default App;
registerRootComponent(App);
