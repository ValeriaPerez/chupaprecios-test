const CartReducer = (
  prevState,
  action,
) => {
  switch (action.type) {
    case 'add_cart':
      let newArrayCart = [...prevState];
      newArrayCart.push(action.cart)

      return newArrayCart;

    case 'delete_cart':
      return [];

    default:
      return prevState;
  }
};

export default CartReducer;
