import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MainContainer } from './src/navigationMain';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <MainContainer />
    </>
  );
};

export default App;