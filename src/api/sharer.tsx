import React, { createContext, ReactElement, ReactNode } from 'react';
import { userMaster } from './data/userConnected';
import { User } from '../types';

type Param = {
  children: ReactNode;
};

type State = {
  userConnected?: User;
};

const state: State = {
  userConnected: userMaster
};
const stateDefault: State = {};

export const Context = createContext(stateDefault);

export const Provider: (param: Param) => ReactElement = (param: Param) => (
  <Context.Provider value={state}>
    { param.children }
  </Context.Provider>
);