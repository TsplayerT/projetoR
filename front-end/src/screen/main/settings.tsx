import React, { useContext } from 'react';

import SafeInput from '../../components/safeInput';
import CheckBox from '../../components/checkBox';
import Screen from '../../components/screen';
import { Context } from '../../api/sharer';

export const SettingsScreen: React.FC = () => {
  const [state] = useContext(Context);

  return(
    <Screen>
      <SafeInput title="Usuário" value={state?.userConnected?.name} />
      <SafeInput title="Senha" value={state?.userConnected?.password} />
      <SafeInput title="E-mail" />
      <CheckBox title="afsgdhjkhlçk~lçlykutj" />
      <CheckBox title="teste 1" />
      <CheckBox title="teste 2" />
    </Screen>
  );
};
