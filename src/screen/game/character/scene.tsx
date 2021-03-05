import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../navigationGameCharacter';

export const SceneScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Scene Screen</Text>
    </View>
  );
};