import { render, screen } from '@testing-library/react';
import AppAvatar from './AppAvatar';

test('renders learn react link', () => {
  render(<AppAvatar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
