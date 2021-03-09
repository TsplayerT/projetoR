import React from 'react';

import { Screen, MenuTitle } from '../../styles/basics';
import { Campaign } from '../../types/index';
import { CardItem } from '../../components/CampaignCardItem/index';

const campaignsList: (Campaign[]) = [
  {
    id: 1,
    name: 'Teste 1',
    description: 'testestetsetsetstestset',
    type: 'character'
  },
  {
    id: 2,
    name: 'Testeeee 2',
    description: 'bla bla bla bl',
    type: 'character'
  },
  {
    id: 3,
    name: 'História Épica',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    type: 'master'
  },
];

export const CampaignScreen: React.FC = () => (
  <Screen>
    <MenuTitle>Campaign Screen</MenuTitle>
    {
      campaignsList.map((item, key) => (
        <CardItem data={item} key={key} />
      ))
    }
  </Screen>
);
