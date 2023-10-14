import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

test('renders ProductCard', () => {
  const component = (
    <ProductCard
      handleOpen={() => null}
      onClickCartç={() => null}
      data={''} />
  );
  render(
    <ProductCard
      handleOpen={() => null}
      onClickCartç={() => null}
      data={''} />
  );

  expect(component).toBeTruthy();
});
