import FontsProps from '../../types/fontProps';

interface Props {
  fonts: FontsProps;
}

const defaultThemeValues: Props = {
  fonts: {
    normal: '1.6rem',
    bigText: '1.8rem',
    subtitle: '2.4rem',
    title: '3.2rem'
  }
};

export default defaultThemeValues;
