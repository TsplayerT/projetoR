import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../navigationGameCharacter';

export const CampaignScreen: React.FC = () => {
  return (
    <View style={Styles.screen} >
      <Text style={Styles.text} >Campaign Screen</Text>
    </View>
  );
};
