import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const CircularIndeterminate = ()=> {
    return (
      <Box sx={{
        position:'fixed', 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        top:'0', 
        right:'0', 
        bottom:'0', 
        left:'0'}}>
        <CircularProgress color='success'/>
      </Box>
    );
  }

export default CircularIndeterminate;
