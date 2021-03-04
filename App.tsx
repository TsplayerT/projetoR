import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container } from './src/navigation';

export default function App() {
  return (
    <>
        <StatusBar style="auto" />
        <Container />
    </>
  );
}