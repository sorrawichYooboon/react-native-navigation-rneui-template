import {createTheme} from '@rneui/themed';
import {defaultColors} from './base';

export const themeRNEUI = createTheme({
  lightColors: {
    primary: defaultColors.jordyBlue,
    secondary: defaultColors.tropicalIndigo,
    background: defaultColors.seasalt,
    white: defaultColors.seasalt,
    black: defaultColors.richBlack,
    grey0: defaultColors.ghostBlue,
    success: defaultColors.celadon,
    warning: defaultColors.hunyadiYellow,
    error: defaultColors.lightCoral,
    disabled: defaultColors.ghostBlue,
  },
  darkColors: {
    primary: defaultColors.jordyBlue,
    secondary: defaultColors.tropicalIndigo,
    background: defaultColors.seasalt,
    white: defaultColors.seasalt,
    black: defaultColors.richBlack,
    grey0: defaultColors.ghostBlue,
    success: defaultColors.celadon,
    warning: defaultColors.hunyadiYellow,
    error: defaultColors.lightCoral,
    disabled: defaultColors.ghostBlue,
  },
  components: {
    Button: {
      raised: true,
    },
  },
});
