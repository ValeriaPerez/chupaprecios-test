import React from 'react';
import {
  Modal,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Rating
} from '@mui/material';
import ProductButton from '../ProductButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  padding: 0,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({
  open,
  handleClose,
  data,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <Card sx={{ ...style, width: 400 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='340'
            image={data?.thumbnail ? data?.thumbnail : 'https://assets.stickpng.com/thumbs/58f37731a4fa116215a92411.png'}
            alt={data?.title}
          />
          <CardContent sx={{ padding: '10px 16px'}}>
            <Typography variant='h7'>
              <strong>{data?.title}</strong>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              <strong>ID:</strong> {data?.asin}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 30 }} variant='p' component='p' color='text.secondary'>
              <strong>${data?.price}</strong> 
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              {data?.rating}
              <Rating name='simple-controlled' value={data?.reviews?.rating} precision={0.5} readOnly />
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              {data?.amazonPrime ? 'Amazon Prime' : 'No disposible para Amazon Prime'}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16 }} variant='p' component='p' color='text.secondary'>
              {data?.amazonChoice ? 'Amazon Choice' : 'No disposible para Amazon Choice'}
            </Typography>
            <a target='_blank' href={data?.url} rel='noreferrer'>ver en tienda</a>
            <ProductButton />
          </CardContent>
        </CardActionArea>
      </Card>
    </Modal>
  );
}
