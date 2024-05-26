import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Calculate } from '@mui/icons-material'
const Rightbar = () => {

  return (
   
    <Box   flex={2} p={2}  sx={{display:{xs:"none", sm:"block"}}}>

<Box position={'fixed'} sx={{overflowY:"auto",height: `calc(100vh - 12vh)`, }}  width={400}>
     <Typography variant='h6' fontWeight={100} mt={2}>
Online Friends
     </Typography>
     <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
</AvatarGroup>

<Typography variant='h6' fontWeight={100}>
Latest Photos
     </Typography>

     <ImageList gap={5} cols={3}  >
     {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
     </ImageList>


     <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
Latest Messages
     </Typography>



     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    
      <Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Brunch this weekend?"
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Ali Connors
        </Typography>
        {" — I'll be in your neighborhood doing errands this…"}
      </React.Fragment>
    }
  />
</ListItem>
<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Brunch this weekend?"
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Ali Connors
        </Typography>
        {" — I'll be in your neighborhood doing errands this…"}
      </React.Fragment>
    }
  />
</ListItem>
<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Brunch this weekend?"
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Ali Connors
        </Typography>
        {" — I'll be in your neighborhood doing errands this…"}
      </React.Fragment>
    }
  />
</ListItem>
<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Brunch this weekend?"
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Ali Connors
        </Typography>
        {" — I'll be in your neighborhood doing errands this…"}
      </React.Fragment>
    }
  />
</ListItem>
<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Brunch this weekend?"
    secondary={
      <React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Ali Connors
        </Typography>
        {" — I'll be in your neighborhood doing errands this…"}
      </React.Fragment>
    }
  />
</ListItem>
    </List>
 
      </Box>
     
    </Box>
  )
}

export default Rightbar


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  // },
];