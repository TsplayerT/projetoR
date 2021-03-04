import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../navigation';

export function InventoryScreen() {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Home Screen</Text>
    </View>
  );
}