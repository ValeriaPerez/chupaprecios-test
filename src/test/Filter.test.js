import { render } from '@testing-library/react';
import Filter from '../components/Filter';

test('render Filter', () => {
  const component = <Filter store={'amazon'} setStore={() => null}/>;
  render(<Filter store={'amazon'} setStore={() => null}/>);

  expect(component).toBeTruthy();
});