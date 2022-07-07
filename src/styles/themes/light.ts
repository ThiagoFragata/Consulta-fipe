import { createTheme } from '@mui/material/styles';
import {
  amber,
  blueGrey,
  green,
  lightBlue,
  red,
  indigo,
} from '@mui/material/colors';

// Create a theme instance.
const light = createTheme({
  palette: {
    primary: {
      main: indigo.A400,
    },
    secondary: {
      main: blueGrey.A400,
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: amber.A400,
    },
    info: {
      main: lightBlue.A400,
    },
    success: {
      main: green.A400,
    },
  },
});

export default light;
