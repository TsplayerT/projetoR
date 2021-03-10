import React from 'react';

import { Screen } from '../../components/Screen';
import { MenuTitle } from '../../styles/basics';
import { CampaignsList } from '../../api/data/campaign';
import { CampaignCardItem } from '../../components/CampaignCardItem';

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
