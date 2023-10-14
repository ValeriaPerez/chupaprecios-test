import { useMemo, useReducer, useEffect, useContext } from 'react';
import cartReducer from './CartReducer';
import initialState from './initialState';
import CartContext  from './CartContext';

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    dispatch({
      type: cart === 'add_cart' ? 'add_cart' : 'detele_cart',
      cart: cart === 'add_cart' ? cart : [],
    });
  }, []);

  const cartContext = useMemo(
    () => ({
    setIsCart: (cart) => {
      console.log('__cart', cart)
        localStorage.setItem('cart', cart);
        dispatch({
          type: cart ? 'add_cart' : 'detele_cart',
          cart: cart,
        });
      },
      cart: state,
    }),
    [state]
  );
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
