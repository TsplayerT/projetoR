import React from 'react';

import { SafeInput } from '../../components/SafeInput/index';
import { CheckBox } from '../../components/CheckBox/index';
import { Screen } from '../../components/Screen/index';

export const SettingsScreen: React.FC = () => (
  <Screen>
    <SafeInput title="Usuário" />
    <SafeInput title="Senha" />
    <SafeInput title="E-mail" />
    <CheckBox title="afsgdhjkhlçk~lçlykutj" />
    <CheckBox title="teste 1" />
    <CheckBox title="teste 2" />
  </Screen>
);
