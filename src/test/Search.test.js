import { render } from '@testing-library/react';
import Search from '../components/Search';

test('render Search', () => {
  const component = <Search setSearch={() => null} />;
  render(<Search setSearch={() => null} />);

  expect(component).toBeTruthy();
});