import React from 'react';

import { Screen } from '../../components/Screen/index';
import { MenuItem, MenuTitle } from '../../styles/basics';
import { Navigate } from '../../components/SwitchNavigator';

export const IndexScreen: React.FC = () => (
  <Screen>
    <MenuTitle>Bem-vindo ao projetoR</MenuTitle>
    <MenuItem title="Login" onPress={() => Navigate({containerName: 'Menu', screenName: 'Login'})} />
    <MenuItem title="Botão faz nada" />
    <MenuItem title="Teste" />
    <MenuItem title="Fechar aba" onPress={() => close()} />
  </Screen>
);