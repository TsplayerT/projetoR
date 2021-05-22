import React, { ReactElement, useState } from 'react';

import { LineSimple, Box, Text } from '../styles/basics';

type Param = {
  title: string;
  value?: boolean;
};

const Index: (param: Param) => ReactElement = (param: Param) => {
  const [checked, setChecked] = useState(param.value ?? false);

  const action = () => {
    console.log(`trocando valor de ${checked} para ${!checked}`);
    setChecked(!checked);
  };

  return (
    <LineSimple>
      <Box onPress={action}>
        <Text>{ checked.toString() }</Text>        
      </Box>
      <Text>{param.title}</Text>
    </LineSimple>    
  );
};

export default Index;