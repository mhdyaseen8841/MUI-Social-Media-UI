// MenuItems.js

import React from 'react';
import { styled,  ListItem, ListItemButton,Switch, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Home, Storefront, Person,ModeNight, AccountBox, Group, Description, Mode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from '../../context/ThemeContext';


const menuItems = [
  { icon: <Home />, text: 'Home', href: '#home' },
  { icon: <Description />, text: 'Pages', href: '#pages' },
  { icon: <Group />, text: 'Groups', href: '#groups' },
  { icon: <Storefront />, text: 'MarketPlace', href: '#marketplace' },
  { icon: <Person />, text: 'Friends', href: '#friends' },
  { icon: <AccountBox />, text: 'Profile', href: '#profile' },
];
 
const StyledListItemText = styled(ListItemText)({
    '& .MuiListItemText-primary': {
      fontWeight: '500',
    },
  });

  const switchStyles = {
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'yellow', // Dark theme track color
    },
    '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
      backgroundColor: 'white', // Dark theme thumb color
    },
  };
  
const MenuItems = () => {
  const { mode,setMode } = useThemeContext();

  return (
    <>
      {menuItems.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component="a" href={item.href}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <StyledListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}

<ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
              {
                mode ==="light" ?<ModeNight/> :<DarkMode style={{color:"yellow"}}/>
              }  
              </ListItemIcon>

              <Switch  checked={mode === "dark"} onChange={e=>setMode(mode=== "light" ? "dark" : "light")} sx={switchStyles}  label='Dark mode'  />
            </ListItemButton>
          </ListItem>

    </>
  );
};

export default MenuItems;
