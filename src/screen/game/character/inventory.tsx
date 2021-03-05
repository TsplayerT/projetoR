import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../navigationGameCharacter';

export const InventoryScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Home Screen</Text>
    </View>
  );
};