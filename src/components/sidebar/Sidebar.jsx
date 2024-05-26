import React from "react";
import {
  Box,
  styled,
  List,
} from "@mui/material";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  
  
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
      <List>
        <MenuItems  />
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
