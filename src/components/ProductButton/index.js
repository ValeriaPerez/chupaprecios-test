const ProductButton = ({
  text = 'Agregar al carrito',
  onClick,
}) => {
  return (
    <button onClick={onClick} className='ProductButton'>
      {text}
    </button>
  );
};

export default ProductButton;