import React, { ReactElement } from 'react';

import { View, Text } from 'react-native';
import { Line, SafeInputButton, Input } from '../styles/basics';

type Param = {
  title: string;
  value?: string;
  key?: number;
  safe?: boolean;
};

const Index: (param: Param) => ReactElement = (param: Param) => (
  <View key={param.key} >
    <Text>{param.title}</Text>
    <Line>
      <Input/>
      <SafeInputButton>
        <Text>{param.safe !== true ? 'Editar' : 'Salvar'}</Text>
      </SafeInputButton>
    </Line>    
  </View>
);

export default Index;