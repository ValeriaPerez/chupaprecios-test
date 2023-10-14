import React from 'react';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const ProductCardCart = ({productCart}) => {
  return (
    <List sx={{ width: '100%', minWidth: 290, maxWidth: 420, bgcolor: 'background.paper' }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src={productCart?.thumbnail} />
        </ListItemAvatar>
        <ListItemText
          primary={productCart?.asin}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                ${productCart?.price} {' '}
              </Typography>
              - {productCart?.asin}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default ProductCardCart;
