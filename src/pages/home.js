import React, { useState } from 'react';
import {
  Stack,
  Container,
  ImageList,
  Typography,
} from '@mui/material';

import { useGetProducts } from '../api/products';

import ProductCard from '../components/ProductCard';
import CardSkeleton from '../components/CardSkeleton';
import Modal from '../components/Modal';
import Empty from '../components/Empty';

const Home = () => {
  const [detailModal, setDetailModal] = useState();
  const [open, setOpen] = useState(false);
  const {products, productsLoading, productsEmpty } = useGetProducts();

  const handleOpen = (data) => {
    setDetailModal(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickCart = (data) => {
    console.log(data)
  };

  return (
    <div className='App'>
      <Container maxWidth='md'>
        <Stack spacing={10}>
          <Typography sx={{ margin: '1em' }} variant='h3'>
            STORE
          </Typography>
          {productsLoading && <CardSkeleton />}
          {!productsLoading && !productsEmpty && (
            <ImageList  cols={3} rowHeight={280} gap={10}>
              {products?.map((item, index) => {
                return (
                  <ProductCard
                    data={item}
                    handleOpen={() => handleOpen(item)}
                    key={index}
                    onClickCart={() => onClickCart(item)}
                  />
                );
              })}
            </ImageList>
          )}
          {!productsLoading && productsEmpty && (
            <Empty />
          )}
        </Stack>
      </Container>
      <Modal data={detailModal} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Home;
