import React from 'react';

import { Screen, MenuItem, MenuTitle } from '../../styles/basics';
import { Navigate } from '../../components/SwitchNavigator';

export const IndexScreen: React.FC = () => (
  <Screen>
    <MenuTitle>Bem-vindo ao projetoR</MenuTitle>
    <MenuItem title="Login" onPress={() => Navigate({containerName: 'Menu', screenName: 'Login'})} />
    <MenuItem title="Botão faz nada" />
  </Screen>
);