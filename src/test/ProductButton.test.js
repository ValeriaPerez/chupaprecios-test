import { render } from '@testing-library/react';
import ProductButton from '../components/ProductButton';

test('render ProductButton', () => {
  const component = <ProductButton text={'Agregar a carrito'} onClick={() => null} />;
  render(<ProductButton text={'Agregar a carrito'} onClick={() => null}  />);

  expect(component).toBeTruthy();
});