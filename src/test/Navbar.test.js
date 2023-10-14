import Navbar from '../components/Navbar';

test('render Navbar', () => {
  const component = <Navbar cart={[1, 2, 3]} isCart={1} />;

  expect(component).toBeTruthy();
});