const ProductButton = ({
  text = 'Agregar',
  onClick,
}) => {
  return (
    <button onClick={onClick} className='ProductButton'>
      {text}
    </button>
  );
};

export default ProductButton;