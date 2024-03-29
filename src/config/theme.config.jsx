import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Arial',
  },
  palette: {
      primary: {
        main: '#313131'
      },
      secondary: {
        main: '#8ec5fc',
      }
  },
});

export default theme;