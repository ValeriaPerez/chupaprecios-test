import * as React from 'react';
import {
  Button,
  Stack,
  Typography,
} from '@mui/material';

const SimplePagination = ({
  next,
  page,
  prev,
  productsEmpty,
}) => {
  return (
    <Stack
      mt={4}
      mb={4}
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={5}
    >
      <Button sx={{ color: '#ff5b5b', borderColor: '#ff5b5b' }} disabled={productsEmpty || page === 1} onClick={prev} variant='outlined'>Anterior</Button>
      <Typography sx={{ fontSize: 14 }} color='#ff5b5b' gutterBottom>
        pagina: <strong>{page}</strong>
      </Typography>
      <Button sx={{ color: '#ff5b5b', borderColor: '#ff5b5b' }} disabled={productsEmpty} onClick={next} variant='outlined'>Siguiente</Button>
    </Stack>
  );
};

export default SimplePagination;