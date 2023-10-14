import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Typography,
  Stack,
  Drawer,
  List,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCardCart from '../ProductCardCart';

const Navbar = ({
  cart,
  isCart,
}) => {
  const [location, setLocation] = useState('');
  const [openDrawer, setOpenDrawer] = useState(false);
  const logo = 'https://chupaprecios.com.mx/static/frontend/bs_gota/bs_gota_home_4/es_ES/images/logo.svg';

  useEffect(() => {
    if (location) setLocation(window.location.pathname);
  }, [location]);

  return (
    <nav>
      <Stack
        className='HeaderSigning'
        alignItems='flex-start'
        direction='row'
        justifyContent='flex-end'
        spacing={2}
        sx={{ padding: '0 1em' }}
      >
        <Typography sx={{ fontSize: 10 }} color='white' gutterBottom>
          Prueba Técnica - Valeria Pérez Jaimes
        </Typography>
      </Stack>
      <Stack
        className='Header'
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        spacing={2}
        sx={{ padding: '0 5em' }}
      >
        <Link to='/'>
          <img src={logo} className='Header__logo' alt='logo' />
        </Link>
        <Badge badgeContent={isCart} color='error' onClick={() => setOpenDrawer(!openDrawer)}>
          <ShoppingCartIcon color={'action'} />
        </Badge>
      </Stack>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {isCart !== 0 && cart.map((itemCart, item) => {
            return <ProductCardCart key={item} productCart={itemCart} />
          })}
          {isCart === 0 &&
            <Stack
              alignItems='center'
              direction='row'
              justifyContent='space-between'
              spacing={2}
              sx={{ padding: '1em' }}
            >
              <Typography sx={{ fontSize: 14 }} variant='h7' color='black' gutterBottom>
                Aún no hay productos en tu carrito
              </Typography>
            </Stack>
          }
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;