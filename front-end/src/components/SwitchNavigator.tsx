import React, { RefObject }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';

import { LoginScreen } from '../screen/menu/login';
import { NewAccountScreen } from '../screen/menu/newAccount';
import { IndexScreen } from '../screen/menu/index';
import { HomeScreen } from '../screen/main/home';
import { CampaignScreen } from '../screen/main/campaign';
import { ProfileScreen } from '../screen/main/profile';
import { SettingsScreen } from '../screen/main/settings';
import { TheaterScreen } from '../screen/game/master/theater';
import { ArsenalScreen } from '../screen/game/master/arsenal';
import { ChatServerScreen } from '../screen/game/master/chatServer';
import { SceneScreen } from '../screen/game/character/scene';
import { InventoryScreen } from '../screen/game/character/inventory';
import { ChatClientScreen } from '../screen/game/character/chatClient';

const ContainerStack = createStackNavigator();
const MenuStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();
const GameCharacterTab = createMaterialTopTabNavigator();
const GamerMasterTab = createMaterialTopTabNavigator();
const navigationReference: RefObject<NavigationContainerRef> = React.createRef();

export type NavigateParam = {
  containerName: string,
  screenName: string
};
export const Navigate: (param: NavigateParam | undefined) => void | undefined = (param: NavigateParam | undefined) => {
  if(param){
    navigationReference.current?.navigate(param.containerName, {
      screen: param.screenName
    });
  }
};

const MenuContainer: React.FC = () => (
  <MenuStack.Navigator initialRouteName="Index" headerMode="none" >
    <MenuStack.Screen name="Index" component={IndexScreen} />
    <MenuStack.Screen name="Login" component={LoginScreen} />
    <MenuStack.Screen name="NewAccount" component={NewAccountScreen} />
  </MenuStack.Navigator>
);

const MainContainer: React.FC = () => (
  <MainDrawer.Navigator initialRouteName="Home">
    <MainDrawer.Screen name="Home" component={HomeScreen} />
    <MainDrawer.Screen name="Campaign" component={CampaignScreen} />
    <MainDrawer.Screen name="Profile" component={ProfileScreen} />
    <MainDrawer.Screen name="Settings" component={SettingsScreen} />
  </MainDrawer.Navigator>
);

const GameCharacterContainer: React.FC = () => (
  <GameCharacterTab.Navigator initialRouteName="Scene" >
    <GameCharacterTab.Screen name="Scene" component={SceneScreen} />
    <GameCharacterTab.Screen name="Inventory" component={InventoryScreen} />
    <GameCharacterTab.Screen name="ChatClient" component={ChatClientScreen} />
  </GameCharacterTab.Navigator>
);

const GameMasterContainer: React.FC = () => (
  <GamerMasterTab.Navigator initialRouteName="Theater" >
    <GamerMasterTab.Screen name="Theater" component={TheaterScreen} />
    <GamerMasterTab.Screen name="Arsenal" component={ArsenalScreen} />
    <GamerMasterTab.Screen name="ChatServer" component={ChatServerScreen} />
  </GamerMasterTab.Navigator>
);

const Index: React.FC = () => (
  <NavigationContainer ref={navigationReference} >
    <ContainerStack.Navigator initialRouteName="Menu" headerMode='none' >
      <ContainerStack.Screen name="Menu" component={MenuContainer} />
      <ContainerStack.Screen name="Main" component={MainContainer} />
      <ContainerStack.Screen name="GameCharacter" component={GameCharacterContainer} />
      <ContainerStack.Screen name="GameMaster" component={GameMasterContainer} />
    </ContainerStack.Navigator>
  </NavigationContainer>
);

export default Index;