import styled from 'styled-components/native';

export const ColorLightGray = 'rgb(120, 120, 120)';
export const ColorMediumGray = 'rgb(80, 80, 80)';
export const ColorDarkGray = 'rgb(40, 40, 40)';

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ColorLightGray};
`;

export const MenuItem = styled.Button`
  background-color: ${ColorDarkGray};
`;

export const MenuTitle = styled.Text`
  margin-bottom: 50px;
  color: black;
  font-weight: 400;
  font-size: 20;
  letter-spacing: 2;
`;

export const Text = styled.Text``;

export const Input = styled.TextInput`
  margin-bottom: 10px;
  background-color: #FFF;
`;