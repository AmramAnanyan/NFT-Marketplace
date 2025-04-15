import { render, screen } from '@testing-library/react';
import 'jest-canvas-mock';
import ButtonUI from 'shared/ui/ButtonUI';

test('renders component without checking anything', () => {
  render(
    <ButtonUI
      isLoading={false}
      text={''}
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
});
