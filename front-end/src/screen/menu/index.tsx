import React, { useContext } from 'react';

import { Context } from '../../api/sharer';
import Screen from '../../components/screen';
import { MenuItem, MenuTitle } from '../../styles/basics';

export const IndexScreen: React.FC = () => {
  const context = useContext(Context);

  return(
    <Screen>
      <MenuTitle>Bem-vindo ao projetoR</MenuTitle>
      <MenuItem title="Login" onPress={() => context.navigate = { containerName: 'Menu', screenName: 'Login' }} />
      <MenuItem title="Botão faz nada" />
      <MenuItem title="Teste" />
      <MenuItem title="Fechar aba" onPress={() => close()} />
    </Screen>
  );
};