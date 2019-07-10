import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e1534',
      contrastText: '#9E9E9E',
    },
    secondary: {
      main: '#212121',
      contrastText: '#9E9E9E',
    },
    
  },
});

export default theme;
