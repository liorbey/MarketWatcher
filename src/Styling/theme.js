import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffc400',
    },
    secondary: {
      main: '#424242',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
