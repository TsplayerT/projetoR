import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../../styles';

export const IndexScreen: React.FC = () => (
  <View style={Styles.screen} >
    {/* 
      A tag button precisa do parametro onPress obrigatoriamente
      <Button title="Login" color={ColorDarkGray} ></Button> 
    */}
    <Text>IndexScreen works</Text>
  </View>
);
