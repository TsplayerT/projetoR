import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MenuContainer } from './navigator/menu'
import registerRootComponent from 'expo/build/launch/registerRootComponent';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <MenuContainer />
        </>
    )
}

registerRootComponent(App);
