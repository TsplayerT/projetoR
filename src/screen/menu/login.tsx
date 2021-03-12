import React, { useContext } from 'react';

import { Context } from '../../api/sharer';
import Screen from '../../components/Screen';
import { Text, TextClickable, Input, MenuItem, Area, MenuTitle, Line } from '../../styles/basics';

export const LoginScreen: React.FC = () => {
  const context = useContext(Context);

  return(
    <Screen>
      <Area>
        <MenuTitle>[LOGO]</MenuTitle>
        <Text>Usuário</Text>
        <Input placeholder="joão" />
        <Text>Senha</Text>
        <Input placeholder="123" />
        <Line>
          <MenuItem styles={{backgroundColor:'green'}} title="Conectar" onPress={() => context.navigate = { containerName: 'Main', screenName: 'Home' }}/>
          <MenuItem styles={{backgroundColor:'red'}} title="Cadastrar" onPress={() => context.navigate = { containerName: 'Menu', screenName: 'NewAccount' }}/>
        </Line>
        <TextClickable onPress={() => alert('teste')} >Clique aqui para recuperar conta</TextClickable>
      </Area>
    </Screen>
  );
};