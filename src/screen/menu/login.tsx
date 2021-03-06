import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Styles, ColorDarkGray } from '../../styles';

export function LoginScreen() {
    const setUserStorage = async () => {

    };

    return (
        <View style={Styles.screen} >
            <Text>Usuário</Text>
            <TextInput placeholder="joão" style={Styles.input} caretHidden={true} />
            <Text>Senha</Text>
            <TextInput placeholder="123" style={Styles.input} />
        </View>
    );
}
