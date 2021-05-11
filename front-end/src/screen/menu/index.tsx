import React, { useContext } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

import { Context } from '../../api/sharer';
import Screen from '../../components/screen';
import { MenuItem, MenuTitle } from '../../styles/basics';

export const IndexScreen: React.FC = () => {
  const [, setNavigate] = useContext(Context);

  const btnAction = (nameButton: string, ev: NativeSyntheticEvent<NativeTouchEvent>): void => {
    if (ev != null)
    {
      console.log(`clicado ${nameButton}: sem função`);
    }
  };

  return(
    <Screen>
      <MenuTitle>Bem-vindo ao projetoR</MenuTitle>
      <MenuItem title="Login" onPress={() => setNavigate({ containerName: 'Menu', screenName: 'Login' })} />
      <MenuItem title="Botão faz nada" onPress={e => btnAction('Botão faz nada', e)} />
      <MenuItem title="Teste" onPress={e => btnAction('Teste', e)} />
      <MenuItem title="Fechar aba" onPress={() => close()} />
    </Screen>
  );
};