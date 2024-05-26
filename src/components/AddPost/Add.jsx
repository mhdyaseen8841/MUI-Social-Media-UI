import { Avatar, Box, ButtonGroup,Button, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import {Add as AdIcon,DateRange,EmojiEmotions,Image,PersonAdd,Send, VideoCameraBack} from '@mui/icons-material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display:'flex',
  alignItems:"center",
  justifyContent:"center",
})


const UserBox = styled(Box)({
  display:'flex',
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
})

const Add = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={()=>setOpen(true)} title="Post" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <Fab color='primary' aria-label="Post">
            <Send style={{ transform: 'rotate(-30deg)' }}/>
            </Fab>
        </Tooltip>
        
        
        <StyledModal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={'white'} p={3} borderRadius={3} >
    <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>

    <UserBox>
      <Avatar
        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
        sx={{width:30, height:30}}
    />
      <Typography fontWeight={500} variant='span'>John Doe</Typography>
    </UserBox>
    <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
  </Box>
</StyledModal>
        
        
        
        
        </>
  )
}

export default Add