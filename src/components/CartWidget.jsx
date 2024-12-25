import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const cartItemCount = 3; // Simulação de itens no carrinho

  return (
    <IconButton color="inherit">
      <Badge badgeContent={cartItemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
