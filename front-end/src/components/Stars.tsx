import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import StarEmpty from './../assets/svg/starEmpty';
import StarHalf from './../assets/svg/starEmpty';
import StarFull from './../assets/svg/starEmpty';

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

const Index: (param: Param) => ReactElement = (param: Param) => {
  const starArray = [0, 0, 0, 0, 0];
  const valueInteger = Math.floor(param.value ?? 0);
  const valueDecimal = param.value ?? 0 - valueInteger;

  for (let i = 0; i < valueInteger; i++) {
    starArray[i] = 2;
  }
  
  if (valueDecimal > 0) {
    starArray[valueInteger] = 1;
  }

  return (
    <Area>
      {starArray.map((item, key)=> (
        <StarView key={key}>
          {item === 0 && <StarEmpty />}
          {item === 1 && <StarHalf />}
          {item === 2 && <StarFull />}
        </StarView>
      ))}
      { param.showNumber && <StarText>{param.value}</StarText> }
    </Area>
  );
};

export default Index;