import React from 'react';
import { PageWrapper, List } from '../../components';

const ListItems = [
  { discription: 'Dungeons&Dragons' },
  { discription: 'Call Off cthulhu' },
  { discription: 'G.U.R.P.S.' },
  { discription: 'Old Dragon' },
];

export const CampaignsScreen = () => (
  <PageWrapper>
    <List
      items={ListItems}
    ></List>
  </PageWrapper>
);