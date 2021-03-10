import * as React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

export const StarEmpty: React.FC = () => {
  return <Svg /* xmlns="http://www.w3.org/2000/svg" */ viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px"><Path d="M0 0h24v24H0z" fill="none" /><Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></Svg>;
};

export const StarHalf: React.FC = () => {
  return <Svg /* xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" */ viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px"><G><Rect fill="none" height={24} width={24} x={0} /></G><G><G><G><Path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" /></G></G></G></Svg>;
};

export const StarFull: React.FC = () => {
  return <Svg /* xmlns="http://www.w3.org/2000/svg" */ viewBox="0 0 24 24" fill="#FF9200" width="18px" height="18px"><Path d="M0 0h24v24H0z" fill="none" /><Path d="M0 0h24v24H0z" fill="none" /><Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></Svg>;
};