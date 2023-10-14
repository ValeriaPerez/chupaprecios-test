import Pagination from '../components/Pagination';

test('render Pagination', () => {
  const component =
    <Pagination
      next={() => null}
      page={1}
      prev={() => null}
      productsEmpty={false} />;

  expect(component).toBeTruthy();
});