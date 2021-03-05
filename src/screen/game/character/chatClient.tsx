import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../navigationGameCharacter';

export const ChatClientScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Chat Client Screen</Text>
    </View>
  );
};