import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../styles';

export function HomeScreen() {
    return (
        <View style={Styles.screen} >
            <Text style={Styles.text} >Home Screen</Text>
        </View>
    );
}
