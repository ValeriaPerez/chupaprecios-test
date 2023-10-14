const CartReducer = (
  prevState,
  action,
) => {
  switch (action.type) {
    case 'add_cart':
      let newArrayCart = [...prevState];
      const isFindCart = newArrayCart.find(cart => cart.asin === action.cart.asin);

      if (isFindCart) {
        newArrayCart.forEach((cart, index) => {
          if (cart.asin === action.cart.asin) {
            newArrayCart[index].count = newArrayCart[index].count + 1;
          }
        })
      } else {
        newArrayCart.push({...action.cart, count: 1});
      }

      return newArrayCart;

    case 'delete_cart':
      return [];

    default:
      return prevState;
  }
};

export default CartReducer;
