import React from 'react';

import Screen from '../../components/screen';
import { MenuTitle } from '../../styles/basics';
import { CampaignsList } from '../../api/data/campaign';
import CampaignCardItem from '../../components/campaignCardItem';

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
