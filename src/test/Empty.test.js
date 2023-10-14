import { render } from '@testing-library/react';
import Empty from '../components/Empty';

test('render Empty', () => {
  const component = <Empty />;
  render(<Empty />);

  expect(component).toBeTruthy();
});