import React, { ReactElement } from 'react';
import styled from 'styled-components/native';

import { StarFull, StarHalf, StarEmpty } from './svg';

const Area = styled.View`
  flex-direction: row;
`;
const StarView = styled.View``;

const StarText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #FF9200;
`;

type Param = {
  value?: number;
  showNumber?: boolean;
};

export const StarsArea: (param: Param) => ReactElement = (param: Param) => {
  const s = [0, 0, 0, 0, 0];
  const floor = Math.floor(param.value ?? 0);
  const left = param.value ?? 0 - floor;

  for(let i = 0; i < floor; i++) {
    s[i] = 2;
  }
  
  if(left > 0) {
    s[floor] = 1;
  }

  return (
    <Area>
      {s.map((item, key)=> (
        <StarView key={key}>
          {item === 0 && <StarEmpty />}
          {item === 1 && <StarHalf  />}
          {item === 2 && <StarFull  />}
        </StarView>
      ))}
      {param.showNumber && <StarText>{param.value}</StarText>}
    </Area>
  );
};