import { Box, Button, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import React from 'react'
import Link from './Link'

const Banner = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h2" component="div" color="primary">
        Welcome to Logix Admin
      </Typography>
      <Typography
        variant="caption"
        component="div"
        color="primary"
        sx={{ position: 'absolute', bottom: '2rem' }}
      >
        © 2022 Copyright ACY{' '}
      </Typography>
    </Box>
  )
}

export default Banner
