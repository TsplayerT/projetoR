import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import Svg, { G, Rect, Path } from 'react-native-svg';

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


const StarEmpty: React.FC = () => {
  return <Svg /* xmlns="http://www.w3.org/2000/svg" */ viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px"><Path d="M0 0h24v24H0z" fill="none" /><Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></Svg>;
};

const StarHalf: React.FC = () => {
  return <Svg /* xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" */ viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px"><G><Rect fill="none" height={24} width={24} x={0} /></G><G><G><G><Path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" /></G></G></G></Svg>;
};

const StarFull: React.FC = () => {
  return <Svg /* xmlns="http://www.w3.org/2000/svg" */ viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px"><Path d="M0 0h24v24H0z" fill="none" /><Path d="M0 0h24v24H0z" fill="none" /><Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></Svg>;
};

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
          {item === 1 && <StarHalf  />}
          {item === 2 && <StarFull  />}
        </StarView>
      ))}
      {param.showNumber && <StarText>{param.value}</StarText>}
    </Area>
  );
};

export default Index;