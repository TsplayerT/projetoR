import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../navigationGameCharacter';

export const ChatServerScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Chat Server Screen</Text>
    </View>
  );
};