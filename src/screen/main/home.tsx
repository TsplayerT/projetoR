import React from 'react';

import { Screen } from '../../components/Screen/index';
import { MenuTitle, MenuItem, Text } from '../../styles/basics';
import { Navigate } from '../../components/SwitchNavigator/index';

export const HomeScreen: React.FC = () => (
  <Screen>
    <MenuTitle>Home Screen</MenuTitle>
    <Text>Atalhos provisórios para as telas</Text>
    <MenuItem title="Campaign" onPress={() => Navigate({containerName: 'Main', screenName: 'Campaign'})}/>
    <MenuItem title="Profile" onPress={() => Navigate({containerName: 'Main', screenName: 'Profile'})}/>
    <MenuItem title="Settings" onPress={() => Navigate({containerName: 'Main', screenName: 'Settings'})}/>
  </Screen>
);