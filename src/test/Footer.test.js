import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('render Footer', () => {
  const component = <Footer />;
  render(<Footer />);

  expect(component).toBeTruthy();
});