import React from 'react';

import { Screen } from '../../components/Screen/index';
import { MenuTitle } from '../../styles/basics';
import { CampaignsList } from '../../data/campaign';
import { CampaignCardItem } from '../../components/CampaignCardItem/index';

export const CampaignScreen: React.FC = () => (
  <Screen>
    <MenuTitle>Campaign Screen</MenuTitle>
    {
      CampaignsList.map((item, key) => (
        <CampaignCardItem data={item} key={key} />
      ))
    }
  </Screen>
);
