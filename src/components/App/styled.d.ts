import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    mainColors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
    };
    textColors: {
      primary: string;
      secondary: string;
    }
  }
}
