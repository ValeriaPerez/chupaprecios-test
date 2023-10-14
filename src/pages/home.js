import { useState } from 'react';
import { Stack, Container, Grid, ImageList, Typography } from '@mui/material';

import { useGetProducts } from '../api/products';

import ProductCard from '../components/ProductCard';
import CardSkeleton from '../components/CardSkeleton';
import FilterStore from '../components/Filter';
import Search from '../components/Search';
import Modal from '../components/Modal';
import Empty from '../components/Empty';
import Pagination from '../components/Pagination';

const Home = () => {
  const [detailModal, setDetailModal] = useState();
  const [open, setOpen] = useState(false);
  const [store, setStore] = useState('amazon');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('gato');
  const {products, productsLoading, productsEmpty, productsPagination} = useGetProducts(search, store, page);

  const handleOpen = (data) => {
    setDetailModal(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickCart = (data) => {
    console.log(data);
  };
  const handleChangePage = (action) => {
    if (action === 'next') {
      setPage(page + 1);
    }
    if (action === 'prev') {
      setPage(page - 1);
    }
  };

  return (
    <div className='App'>
      <Container maxWidth='md'>
        <Grid container spacing={2} mb={5}>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <FilterStore store={store} setStore={setStore} />
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <Search setSearch={setSearch}/>
          </Grid>
        </Grid>
        <Stack spacing={10}>
          <Typography variant='h5'>
            STORE - {store}
          </Typography>
          {productsLoading && <CardSkeleton />}
          {!productsLoading && !productsEmpty && (
            <ImageList cols={3} rowHeight={280} gap={10} flexWrap='wrap'>
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
          {!productsLoading && productsEmpty && <Empty />}
        </Stack>
        <Pagination
          info={productsPagination}
          page={page}
          next={() => handleChangePage('next')}
          prev={() => handleChangePage('prev')}
          productsEmpty={productsEmpty}
          setPage={setPage}
        />
      </Container>
      <Modal data={detailModal} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Home;
