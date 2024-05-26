// MenuItems.js

import React from 'react';
import { styled,  ListItem, ListItemButton,Switch, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Home, Storefront, Person,ModeNight, AccountBox, Group, Description } from '@mui/icons-material';

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
  
const MenuItems = () => {
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
                <ModeNight />
              </ListItemIcon>

              <Switch label='Dark mode' defaultChecked />
            </ListItemButton>
          </ListItem>

    </>
  );
};

export default MenuItems;
