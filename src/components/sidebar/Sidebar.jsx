import React from "react";
import {
  Box,
  styled,
  List,
  Drawer,
} from "@mui/material";
import MenuItems from "./MenuItems";
import { useThemeContext } from '../../context/ThemeContext';
const Sidebar = () => {

  const { openDrawer,setOpenDrawer } = useThemeContext();


  
  return (
    <>
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    <Box position={"fixed"}>
     <List>
       <MenuItems  />
     </List>
      </Box>
     </Box>

<Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
<Box flex={1} p={2} sx={{ display: { xs: "block", sm: "none" } }}>
      <Box >
      <List>
        <MenuItems  />
      </List>
      </Box>
    </Box>

</Drawer>
</>
  );
};

export default Sidebar;
