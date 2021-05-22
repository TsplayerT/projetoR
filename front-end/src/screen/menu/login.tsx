import React from 'react';

import { ChangeNavigation } from '../../api/sharer';
import Screen from '../../components/screen';
import { Text, TextClickable, Input, MenuItem, Area, Line } from '../../styles/basics';
import Logo from '../../assets/svg/logo';

export const LoginScreen: React.FC = () => {
  return(
    <Screen>
      <Area>
        <Logo width="100%" height="70%" />
        <Text>Usuário</Text>
        <Input placeholder="joão" />
        <Text>Senha</Text>
        <Input placeholder="123" />
        <Line>
          <MenuItem styles={{backgroundColor:'green'}} title="Conectar" onPress={() => ChangeNavigation('Main', 'Home')}/>
          <MenuItem styles={{backgroundColor:'red'}} title="Cadastrar" onPress={() => ChangeNavigation('Menu', 'NewAccount')}/>
        </Line>
        <TextClickable onPress={() => alert('teste')} >Clique aqui para recuperar conta</TextClickable>
      </Area>
    </Screen>
  );
};