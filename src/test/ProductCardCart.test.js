import { render } from '@testing-library/react';
import ProductCardCart from '../components/ProductCardCart';

test('render ProductCardSkeleton', () => {
  const component = <ProductCardCart productCart={{}} />;
  render(<ProductCardCart productCart={{}} />);

  expect(component).toBeTruthy();
});