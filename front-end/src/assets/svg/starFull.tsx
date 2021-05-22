import React, { ReactElement } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Index: (props: SvgProps) => ReactElement = (props: SvgProps) =>
  <Svg viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px" {...props}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </Svg>;

export default Index;

