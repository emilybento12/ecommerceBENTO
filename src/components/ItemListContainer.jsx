import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ItemListContainer = ({ greeting }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        backgroundColor: '#98cce6',
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" component="h1">
        {greeting}
      </Typography>
    </Box>
  );
};

export default ItemListContainer;
