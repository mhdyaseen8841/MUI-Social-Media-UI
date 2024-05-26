import { Box, Stack } from "@mui/material"
import Feed from "./components/feed/Feed"
import Rightbar from "./components/righbar/Rightbar"
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"
import './app.css'
function App() {
  


  return (
    <Box>
      <Navbar/>
    <Stack direction="row" spacing={2} justifyContent={'space-between'}>
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </Stack>
    </Box>
  )
}

export default App
