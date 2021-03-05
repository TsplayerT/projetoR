import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../navigationGameCharacter';

export const ProfileScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Profile Screen</Text>
    </View>
  );
};
