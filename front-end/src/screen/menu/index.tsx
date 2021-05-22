import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

import { ChangeNavigation } from '../../api/sharer';
import Screen from '../../components/screen';
import { MenuItem, MenuTitle } from '../../styles/basics';

export const IndexScreen: React.FC = () => {
  const btnAction = (nameButton: string, ev: NativeSyntheticEvent<NativeTouchEvent>): void => {
    if (ev != null)
    {
      console.log(`clicado ${nameButton}: sem função`);
    }
  };

  return(
    <Screen>
      <MenuTitle>Bem-vindo ao projetoR</MenuTitle>
      <MenuItem title="Login" onPress={() => ChangeNavigation('Menu', 'Login')} />
      <MenuItem title="Botão faz nada" onPress={e => btnAction('Botão faz nada', e)} />
      <MenuItem title="Teste" onPress={e => btnAction('Teste', e)} />
      <MenuItem title="Fechar aba" onPress={() => close()} />
    </Screen>
  );
};