
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  ImageListItem,
  Chip,
  Typography,
  Stack,
} from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ProductButton from '../ProductButton';

function ProductCard({
  handleOpen,
  onClickCart,
  data,
  description,
  name,
  price,
  bestSeller,
  image
}) {
  return (
    <div>
      <ImageListItem>
        <Chip
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
          label={bestSeller && 'Recomendado'}
          color={bestSeller && 'success'}
          variant='filled' />
        <img
          className='imageProductCard'
          src={`${image}?w=250&h=300&fit=crop&auto=format`}
          alt={description}
          loading='lazy'
        />
        <ImageListItemBar
          title={description}
          actionIcon={
            <IconButton
              onClick={handleOpen}
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${description}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
      <Stack
        alignItems="flex-start"
        direction="column"
        justifyContent="flex-start"
        mb={2}
        mt={2}
        spacing={1}
        sx={{ padding: '0 1em' }}
      >
        <Typography gutterBottom sx={{ fontSize: 12 }} variant='p' component='p' color='text.secondary'>
          <strong>{name}</strong>
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 18, fontWeight: '700' }} variant='p' component='p' color='text.secondary'>
          <strong>${price}</strong>
        </Typography>
        <ProductButton onClick={onClickCart} />
      </Stack>
    </div>
  );
}

ProductCard.propTypes = {
  handleOpen: PropTypes.func,
  onClickCart: PropTypes.func,
  data: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  bestSeller: PropTypes.bool,
  price: PropTypes.number,
}

export default ProductCard