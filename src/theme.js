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
  },
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey'
  }
  
})