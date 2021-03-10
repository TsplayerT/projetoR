import React from 'react';

import Screen from '../../components/Screen';
import { Text, TextClickable, Input, MenuItem, Area, MenuTitle, Line } from '../../styles/basics';
import { Navigate } from '../../components/SwitchNavigator';

export const LoginScreen: React.FC = () => (
  <Screen>
    <Area>
      <MenuTitle>[LOGO]</MenuTitle>
      <Text>Usuário</Text>
      <Input placeholder="joão" />
      <Text>Senha</Text>
      <Input placeholder="123" />
      <Line>
        <MenuItem styles={{backgroundColor:'green'}} title="Conectar" onPress={() => Navigate({containerName: 'Main', screenName: 'Home'})}/>
        <MenuItem styles={{backgroundColor:'red'}} title="Cadastrar" onPress={() => Navigate({containerName: 'Menu', screenName: 'NewAccount'})}/>
      </Line>
      <TextClickable onPress={() => alert('teste')} >Clique aqui para recuperar conta</TextClickable>
    </Area>
  </Screen>
);