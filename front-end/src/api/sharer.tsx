import React, { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';
// import { User } from '../types';
// import { userMaster } from './data/userConnected';
import { Navigate, NavigateParam } from '../components/switchNavigator';

type Param = {
  children: ReactNode;
};
// type State = {
//   userConnected?: User;
//   navigate?: NavigateParam;
// };
type ContextValueType = [NavigateParam | undefined, React.Dispatch<React.SetStateAction<NavigateParam | undefined>>];

// const state: State = {
//   userConnected: userMaster
// };

const contextValueDefault: ContextValueType = {} as ContextValueType;

export const Context = createContext(contextValueDefault);

export const Provider: (param: Param) => ReactElement = (param: Param) => {
  const [navigate, setNavigate] = useState<NavigateParam>();
  
  useEffect(() => {
    console.log('containerName: ' + navigate?.containerName + ' | screenName: ' + navigate?.screenName);

    if(navigate != undefined) {
      Navigate(navigate);
    }
  }, [navigate]);

  return(
    <Context.Provider value={[navigate, setNavigate]}>
      { param.children }
    </Context.Provider>
  );
};