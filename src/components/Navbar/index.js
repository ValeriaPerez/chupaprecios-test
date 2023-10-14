import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Stack,
} from '@mui/material';

const Navbar = () => {
  const [location, setLocation] = useState('');
  const logo = 'https://chupaprecios.com.mx/static/frontend/bs_gota/bs_gota_home_4/es_ES/images/logo.svg';

  useEffect(() => {
    if (location) setLocation(window.location.pathname);
  }, [location]);

  return (
    <nav>
      <Stack
        className='HeaderSigning'
        alignItems="flex-start"
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{ padding: '0 1em' }}
      >
        <Typography sx={{ fontSize: 10 }} color='white' gutterBottom>
          Prueba Técnica - Valeria Pérez Jaimes
        </Typography>
      </Stack>
      <Stack
        className='Header'
        alignItems="flex-start"
        direction="row"
        justifyContent="flex-start"
        spacing={2}
        sx={{ padding: '0 1em' }}
      >
        <Link to='/'>
          <img src={logo} className='Header__logo' alt='logo' />
        </Link>
      </Stack>
    </nav>
  );
};

export default Navbar;