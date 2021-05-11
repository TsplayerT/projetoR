import React, { createContext, ReactElement, ReactNode, useEffect } from 'react';
import { userMaster } from './data/userConnected';
import { User } from '../types';
import { Navigate, NavigateParam } from '../components/switchNavigator';

type Param = {
  children: ReactNode;
};
type State = {
  userConnected?: User;
  navigate?: NavigateParam;
};

const state: State = {
  userConnected: userMaster
};

export const Context = createContext(state);

export const Provider: (param: Param) => ReactElement = (param: Param) => {
  useEffect(() => {
    alert('containerName: ' + state?.navigate?.containerName + ' | screenName: ' + state?.navigate?.screenName);

    if(state?.navigate) {
      Navigate(state.navigate);
    }
  }, [state?.navigate]);

  return(
    <Context.Provider value={state}>
      { param.children }
    </Context.Provider>
  );
};