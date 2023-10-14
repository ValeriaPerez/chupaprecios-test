import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

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