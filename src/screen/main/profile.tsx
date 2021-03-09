import React from 'react';
import styled from 'styled-components/native';

import { ColorMediumGray, ColorDarkGray, Screen, Text } from '../../styles/basics';
import { StarsArea } from '../../components/StarsCard/index';

const AreaBase = styled.View`
  width: 100%;
  height: 200px;
  padding: 10px 20px 10px 20px;
  background-color: ${ColorMediumGray};
`;

const AreaBaseLine = styled.View`
  flex: 1;
  flex-direction: row;
`;

const AreaBaseEssential = styled.View`
  flex: 1;
`;

const AreaUnknown = styled.View`
  width: 600px;
  height: 100px;
  background-color: ${ColorDarkGray};
`;

const AreaBadge = styled.View`
  width: 90%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${ColorMediumGray};
`;

const Badge = styled.View`
  margin: 20px 0 0 20px;
  width: 47.75%;
  height: 18%;
  border: 1px solid black;
`;

const AreaComments = styled.ScrollView`
  width: 90%;
  height: 200px;
  padding-bottom: 20px;
  background-color: ${ColorMediumGray};
`;

const Comment = styled.View`
  margin: 20px 0 0 20px;
  width: 100% - 40px;
  height: 230px;
  border: 1px solid black;
`;

export const ProfileScreen: React.FC = () => (
  <Screen>
    <AreaBase>
      <AreaBaseLine>
        <AreaUnknown/>
        <AreaBaseEssential>
          <Text>Barra de Nível do Jogador / Usuário</Text>
          <StarsArea value={3.4} showNumber={true} />
        </AreaBaseEssential>
      </AreaBaseLine>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar aliquam quam, vitae facilisis libero aliquet quis. Nulla ultricies massa eget augue pulvinar commodo. Proin elementum ullamcorper ornare. Duis sagittis dignissim diam, et pulvinar mi consectetur dapibus. Quisque quis sodales lacus, vitae vulputate diam. Sed pretium nunc eget bibendum molestie. Proin a nulla elit.</Text>
    </AreaBase>
    <Text>Insígnias</Text>
    <AreaBadge>
      {
        [1, 2, 3, 4, 5].map((item, key) => (
          <Badge key={key}>
            <Text>{item}</Text>
          </Badge>
        ))
      }
    </AreaBadge>
    <Text>Comentários</Text>
    <AreaComments>
      {
        [1, 2, 3].map((item, key) => (
          <Comment key={key}>
            <Text>{item}</Text>
          </Comment>
        ))
      }
    </AreaComments>
  </Screen>
);
