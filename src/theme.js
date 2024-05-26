import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const myTheme = createTheme({
  palette:{
    primary:{
      main: "#1760a5",
      light: "skyblue"
    },
    secondary:{
      main: '#15c630',
    },
    otherColor:{
      main:"#999"
    }
  }
})