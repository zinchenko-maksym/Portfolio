import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    mainColors: {
      dark: string;
      medium: string;
      light: string;
    };
    textColors: {
      main: string;
      secondary: string;
    }
  }
}
