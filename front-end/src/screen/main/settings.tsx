import React, { useContext } from 'react';

import SafeInput from '../../components/SafeInput';
import CheckBox from '../../components/CheckBox';
import Screen from '../../components/Screen';
import { Context } from '../../api/sharer';

export const SettingsScreen: React.FC = () => {
  const context = useContext(Context);

  return(
    <Screen>
      <SafeInput title="Usuário" value={context.userConnected?.name} />
      <SafeInput title="Senha" value={context.userConnected?.password} />
      <SafeInput title="E-mail" />
      <CheckBox title="afsgdhjkhlçk~lçlykutj" />
      <CheckBox title="teste 1" />
      <CheckBox title="teste 2" />
    </Screen>
  );
};