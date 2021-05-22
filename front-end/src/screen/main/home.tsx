import React from 'react';

import { ChangeNavigation } from '../../api/sharer';
import Screen from '../../components/screen';
import { MenuTitle, MenuItem, Text } from '../../styles/basics';

export const HomeScreen: React.FC = () => {
  return (
    <Screen>
      <MenuTitle>Home Screen</MenuTitle>
      <Text>Atalhos provisórios para as telas</Text>
      <MenuItem title="Campaign" onPress={() => ChangeNavigation('Main', 'Campaign')}/>
      <MenuItem title="Profile" onPress={() => ChangeNavigation('Main',  'Profile')}/>
      <MenuItem title="Settings" onPress={() => ChangeNavigation('Main', 'Settings')}/>
    </Screen>
  );
};