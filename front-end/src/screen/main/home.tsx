import React, { useContext } from 'react';

import { Context } from '../../api/sharer';
import Screen from '../../components/screen';
import { MenuTitle, MenuItem, Text } from '../../styles/basics';

export const HomeScreen: React.FC = () => {
  const context = useContext(Context);
  
  return (
    <Screen>
      <MenuTitle>Home Screen</MenuTitle>
      <Text>Atalhos provisórios para as telas</Text>
      <MenuItem title="Campaign" onPress={() => context.navigate = { containerName: 'Main', screenName: 'Campaign' }}/>
      <MenuItem title="Profile" onPress={() => context.navigate = { containerName: 'Main', screenName: 'Profile' }}/>
      <MenuItem title="Settings" onPress={() => context.navigate = { containerName: 'Main', screenName: 'Settings' }}/>
    </Screen>
  );
};