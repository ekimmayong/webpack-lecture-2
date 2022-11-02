import React from 'react';
import { AppBar, Box, Container, CssBaseline, Eleva, Toolbar, Typography } from '@mui/material';


const Header = () => {
  return (
    <AppBar>
        <Toolbar variant='dense'>
            <Typography variant='h5'>WEB APP</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header