import React from 'react';

import { Screen, Text, Input, MenuItem } from '../../styles/basics';
import { Navigate } from '../../components/SwitchNavigator';

export const LoginScreen: React.FC = () => (
  <Screen>
    <Text>Usuário</Text>
    <Input placeholder="joão" />
    <Text>Senha</Text>
    <Input placeholder="123" />
    <MenuItem title="Conectar" onPress={() => Navigate({containerName: 'Main', screenName: 'Home'})}/>
  </Screen>
);