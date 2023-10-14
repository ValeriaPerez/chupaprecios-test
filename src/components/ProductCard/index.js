
import * as React from 'react';
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

export default function ProductCard({
  handleOpen,
  onClickCart,
  data
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
          label={data.bestSeller && 'Recomendado'}
          color={data.bestSeller && 'success'}
          variant='filled' />
        <img
          className='imageProductCard'
          src={`${data.thumbnail}?w=250&h=300&fit=crop&auto=format`}
          alt={data.title}
          loading='lazy'
        />
        <ImageListItemBar
          title={data.title}
          actionIcon={
            <IconButton
              onClick={handleOpen}
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${data.title}`}
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
          <strong>{data?.asin}</strong>
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 18, fontWeight: '700' }} variant='p' component='p' color='text.secondary'>
          <strong>${data?.price}</strong>
        </Typography>
        <ProductButton onClick={onClickCart} />
      </Stack>
    </div>
  );
}