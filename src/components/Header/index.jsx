import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Container,
  Toolbar,
} from "@mui/material";


const Header = () => {
 
  return (
    <AppBar style={{backgroundColor:'#232329'}} >
      <Container maxWidth='lg'>
        <Toolbar >
          
          <Typography variant="h6" flexGrow={1}>Weather APP</Typography>
          <Box mr={3}>
            <Link style={{ textDecoration: 'none', color:'white' }} to="/">
              <Button color="inherit" variant="outlined">
                Home
              </Button>
            </Link>
          </Box>

          <Box  mr={3}>
            <Link style={{ textDecoration: 'none', color:'white' }} to="/favorite">
              <Button color="inherit" variant="outlined">
                Favorite
              </Button>
            </Link>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
