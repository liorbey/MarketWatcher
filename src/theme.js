import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#76ff03',
    },
    secondary: {
      main: '#424242',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#212121',
    },
  },
});

export default theme;
