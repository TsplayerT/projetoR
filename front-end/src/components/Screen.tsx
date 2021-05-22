import React, { ReactElement, ReactNode } from 'react';

import { ScreenArea, ScreenScroller } from '../styles/basics';

type Param = {
  children: ReactNode;
};

const Index: (param: Param) => ReactElement = (param: Param) => (
  <ScreenScroller>
    <ScreenArea>
      { param.children }
    </ScreenArea>
  </ScreenScroller>
);

export default Index;