import { Box,Typography } from '@mui/material'
import Post from './Post'
import React from 'react'

const Feed = () => {
  return (
    <Box sx={{ paddingLeft: 0 }} flex={4} p={2}>



<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
    </Box>
  )
}

export default Feed