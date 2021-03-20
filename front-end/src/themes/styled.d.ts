import { DefaultTheme } from 'styled-components/native';

import { ITheme } from './ITheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}