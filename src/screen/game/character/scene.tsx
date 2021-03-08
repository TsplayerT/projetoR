import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../styles';

export const SceneScreen: React.FC = () => (
  <View style={Styles.screen} >
    <Text style={Styles.text} >Scene Screen</Text>
  </View>
);