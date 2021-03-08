import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from '../../styles';

export const LoginScreen: React.FC = () => (
  <View style={Styles.screen} >
    <Text>Usuário</Text>
    <TextInput placeholder="joão" style={Styles.input} caretHidden={true} />
    <Text>Senha</Text>
    <TextInput placeholder="123" style={Styles.input} />
  </View>
);