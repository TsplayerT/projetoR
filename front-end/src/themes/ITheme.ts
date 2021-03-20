
export interface ITheme {
  title: string;
  colors: IColors;
}

interface IColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
}