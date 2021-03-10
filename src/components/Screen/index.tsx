import React, { ReactElement } from 'react';

import { ScreenArea, ScreenScroller } from '../../styles/basics';

export const Screen: ({ children }: { children: unknown }) => ReactElement = ({ children }: { children: unknown }) => (
  <ScreenScroller>
    <ScreenArea>
      { children }
    </ScreenArea>
  </ScreenScroller>
);