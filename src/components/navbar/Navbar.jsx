import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Mail from '@mui/icons-material/Mail';
import Notfications from '@mui/icons-material/Notifications';

const StyledToolsbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color:"black"  ,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }) => ({
display:'none', gap: '20px', alignItems: 'center',
[theme.breakpoints.up("sm")]:{
  display: 'flex'
 }
}));


const UserBox = styled(Box)(({ theme }) => ({
  display:'none', gap: '20px', alignItems: 'center',
  [theme.breakpoints.down("sm")]:{
    display: 'flex'
   }
}))
const Navbar = () => {

  const [open,setOpen] = React.useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolsbar>
        
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SOCIALGRAM
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        
        <Search   >
        
          <InputBase  style={{
    '&::placeholder': {
      color: '#333', // Adjust this for your desired dark color
    },
  }} placeholder="search user"></InputBase>
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>

          <Badge badgeContent={3} color="error">
            <Notfications  />
          </Badge>
          <Avatar sx={{width:30, height:30}} onClick={()=>setOpen(!open)} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />

        </IconContainer>
        <UserBox onClick={()=>setOpen(!open)}>
        <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Typography variant="span" >Remy</Typography>
        </UserBox>
      </StyledToolsbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
 
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  );
};

export default Navbar;
