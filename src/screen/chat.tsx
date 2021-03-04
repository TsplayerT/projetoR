import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../navigation';

export function ChatScreen() {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Chat Screen</Text>
    </View>
  );
}