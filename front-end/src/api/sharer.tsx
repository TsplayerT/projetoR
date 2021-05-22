import React, { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';
import { User } from '../types';
import { Navigate, NavigateParam } from '../components/switchNavigator';

type Param = {
  children: ReactNode;
};
type State = {
  userConnected?: User;
  navigate?: NavigateParam;
};
type ContextValueType = [State | undefined, React.Dispatch<React.SetStateAction<State | undefined>>];

const contextValueDefault = {} as ContextValueType;

export let ChangeNavigation: (container: string, screen: string) => void;

export const Context = createContext(contextValueDefault);

export const Provider: (param: Param) => ReactElement = (param: Param) => {
  const [state, setState] = useState<State>();
  
  useEffect(() => {
    console.log('containerName: ' + state?.navigate?.containerName + ' | screenName: ' + state?.navigate?.screenName);

    if (!state && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
      Navigate({containerName: 'Main', screenName: 'Settings'});
      return;
    }

    Navigate(state?.navigate);
  }, [state]);

  ChangeNavigation = (containerName: string, screenName: string) => {
    const newState = {
      userConnected: state?.userConnected,
      navigate: {
        containerName: containerName,
        screenName: screenName
      }
    };

    setState(newState);
  };

  return(
    <Context.Provider value={[state, setState]}>
      { param.children }
    </Context.Provider>
  );
};