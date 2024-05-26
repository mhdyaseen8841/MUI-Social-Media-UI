import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Feed from "./components/feed/Feed"
import Rightbar from "./components/righbar/Rightbar"
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"
import Add from "./components/AddPost/Add"
import './app.css'

import { useThemeContext } from './context/ThemeContext';

function App() {
 
  const { mode } = useThemeContext();
const darkTheme = createTheme({
  palette:{
    mode:mode
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '::placeholder': {
            color: 'grey',
            opacity: 1,
          },
        },
      },
    },
  },
})
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
  
<Add/>
    <Stack direction="row" spacing={2} justifyContent={'space-between'}>
    <Sidebar />
    <Feed/>
    <Rightbar/>
    </Stack>
    </Box>
    </ThemeProvider>
  )
}

export default App
