import { render } from '@testing-library/react';
import ProductCardSkeleton from '../components/ProductCardSkeleton';

test('render ProductCardSkeleton', () => {
  const component = <ProductCardSkeleton />;
  render(<ProductCardSkeleton />);

  expect(component).toBeTruthy();
});