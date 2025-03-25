import { render, screen } from '@testing-library/react';
import 'jest-canvas-mock';

test('Discover Digital Art & Collect Nfts', () => {
  const title = screen.getByText(/Discover Digital Art & Collect Nfts/);
  expect(title).toBeInTheDocument();
});
