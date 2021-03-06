import React from 'react';
import { View, Button } from 'react-native';
import { Styles, ColorDarkGray } from '../../styles';
import { StackHeaderProps } from '@react-navigation/stack';

export function IndexScreen({ navigation }: StackHeaderProps) {
    return (
        <View style={Styles.screen} >
            <Button title="Login" color={ColorDarkGray} onPress={() => { }}></Button>
        </View>
    );
}
