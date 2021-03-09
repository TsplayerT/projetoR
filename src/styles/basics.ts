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
/*
const ScreenScroller = styled.ScrollView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ColorLightGray};
`;
export const Screen = () => (
  <ScreenScroller>
    <ScreenBase>
    </ScreenBase>
  </ScreenScroller>
);
*/

export const Line = styled.View`
  padding: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Area = styled.View`
  padding: 40px;
  height: 450px;
  width: 300px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorMediumGray};
`;

export const Card = styled.View`
  padding: 20px;
  height: 150px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${ColorMediumGray};
`;

//não está funcionando direito
export const MenuItem = styled.Button`
  margin-bottom: 10px;
`;

export const MenuTitle = styled.Text`
  margin-bottom: 50px;
  color: black;
  font-weight: 400;
  font-size: 20;
  letter-spacing: 2;
`;

// export const Text = styled.Text`
//   margin-bottom: 10px;
// `;
// export const TextClickable = styled.Text`
//   color: white;
//   margin-top: 30px;
//   border: 1px solid black;

//   :hover {
//     transform: scale(1.15);
//     cursor: pointer;
//     color: lightgray;
//   };
// `;

export const Text = styled.Text`
  margin-bottom: 10px;
`;
export const TextClickable = styled.Text`
  color: white;
  margin-top: 30px;
  border: 1px solid black;

  :hover {
    transform: scale(1.15);
    cursor: pointer;
    color: lightgray;
  };
`;

export const Input = styled.TextInput`
  padding: 5px 15px 5px 15px;
  margin-bottom: 20px;
  background-color: #FFF;
`;