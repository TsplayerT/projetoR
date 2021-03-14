import React, { ReactElement, useState } from 'react';

import { LineSimple, Box, Text } from '../styles/basics';

type Param = {
  title: string;
  value?: boolean;
  key?: number;
};

const Index: (param: Param) => ReactElement = (param: Param) => {
  const [checked, setChecked] = useState(param.value ?? false);

  return (
    <LineSimple key={param.key} >
      <Box onPress={() => setChecked(!checked)} >{ checked.toString() }</Box>
      <Text>{param.title}</Text>
    </LineSimple>    
  );
};

export default Index;