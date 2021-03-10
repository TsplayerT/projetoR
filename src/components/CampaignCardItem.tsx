import React, { ReactElement } from 'react';

import { Card, Text } from '../styles/basics';
import { Campaign } from '../types';

type Param = {
  data: Campaign; 
  key: number;
};

const Index: (param: Param) => ReactElement = (param: Param) => (
  <Card  key={param.key} style={{ backgroundColor: param.data.type == 'character' ? 'rgb(50, 50, 200)' : 'rgb(200, 50, 50)' }} >
    <Text>{param.data.name}</Text>
    <Text>{param.data.description}</Text>
  </Card>
);

export default Index;