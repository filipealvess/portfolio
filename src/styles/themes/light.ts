import { DefaultTheme } from 'styled-components';
import defaultThemeValues from './default';

const light: DefaultTheme = {
  primary: '#01A7C2',
  background: '#F4F4F9',
  borderColor: '#E2E2E2',
  sectionBackground: '#FFFFFF',
  textColor: '#111111',
  titleColor: '#000000',
  ...defaultThemeValues
};

export default light;
