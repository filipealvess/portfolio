import 'styled-components';
import FontsProps from './types/fontProps';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    titleColor: string;
    textColor: string;
    background: string;
    borderColor: string;
    sectionBackground: string;
    fonts: FontsProps
  }
}
