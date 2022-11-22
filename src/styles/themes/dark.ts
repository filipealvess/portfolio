import { DefaultTheme } from 'styled-components';
import defaultThemeValues from './default';

const dark: DefaultTheme = {
  primary: '#01A7C2',
  background: '#111111',
  borderColor: '#474747',
  sectionBackground: '#0A0A0A',
  textColor: '#EFEFEF',
  titleColor: '#FFFFFF',
  ...defaultThemeValues
};

export default dark;
