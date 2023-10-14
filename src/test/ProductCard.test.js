import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

test('renders ProductCard', () => {
  const component = (
    <ProductCard
      bestSeller={true}
      description={'description of product'}
      image={'source image'}
      name={'name produsct - asin'}
      price={200}
      handleOpen={() => null}
      onClickCartç={() => null}
    />
  );
  render(
    <ProductCard
      bestSeller={true}
      description={'description of product'}
      image={'source image'}
      name={'name produsct - asin'}
      price={200}
      handleOpen={() => null}
      onClickCartç={() => null}
    />
  );

  expect(component).toBeTruthy();
});
