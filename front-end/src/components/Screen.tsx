import React, { ReactElement } from 'react';

import { ScreenArea, ScreenScroller } from '../styles/basics';

const Index: ({ children }: { children: unknown }) => ReactElement = ({ children }: { children: unknown }) => (
  <ScreenScroller>
    <ScreenArea>
      { children }
    </ScreenArea>
  </ScreenScroller>
);

export default Index;