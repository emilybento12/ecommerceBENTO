import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import StorefrontIcon from '@mui/icons-material/Storefront'; // Ícone da marca

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {"Ecommerce Bento"}
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <StorefrontIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
         
        </Typography>

       
        <Box sx={{ display: 'flex', gap: 14 }}>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Contato</Button>
          <Button color="inherit">Produtos</Button>
        </Box>
        
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
