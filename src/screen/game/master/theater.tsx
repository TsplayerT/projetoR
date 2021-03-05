import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../navigationGameCharacter';

export const TheaterScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Theater Screen</Text>
    </View>
  );
};