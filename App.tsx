import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MainContainer } from './src/navigationMain';

export default function App() {
  return (
    <>
        <StatusBar style="auto" />
        <MainContainer />
    </>
  );
}