import React from 'react';
import { Link } from 'react-router-dom';
import {Box, AppBar, Toolbar, Typography, Button } from '@mui/material';



const Header = () => {
  
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar sx={{backgroundColor:'#232329'}} position="static">
      <Toolbar sx={{ 
      display:'grid',
      gridTemplateColumns:'70% 15% 15%'}} >
        <Typography sx={{justifySelf:'start'}} variant="h4" component="div">
          The Weather App
        </Typography>
        <Button sx={{
          width:'120px',
          borderRadius:'10px',
          border:'1px solid white'
        }}><Link style={{
          textDecoration:'none',
          color:'white'
        }} to = '/'>Home</Link></Button>
        <Button sx={{
          width:'120px',
          borderRadius:'10px',
          border:'1px solid white',
          textDecoration:'none'
        }}><Link style={{
          textDecoration:'none',
          color:'white'
        }} to = '/favorite'>Favorite</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
};

export default Header;
