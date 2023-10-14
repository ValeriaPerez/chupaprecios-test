import { useMemo, useReducer, useContext } from 'react';
import cartReducer from './CartReducer';
import initialState from './initialState';
import CartContext  from './CartContext';

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const cartContext = useMemo(
    () => ({
      setIsCart: (cart) => {
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
