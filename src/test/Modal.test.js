import { render } from '@testing-library/react';
import Modal from '../components/Modal';

test('render Modal', () => {
  const component = (
    <Modal
      data={{ title: '' }}
      handleClose={() => null}
      onClickCart={() => null}
      open={false}
    />
  );
  render(
    <Modal
      data={{ title: '' }}
      handleClose={() => null}
      onClickCart={() => null}
      open={false}
    />
  );

  expect(component).toBeTruthy();
});