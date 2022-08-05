import { render, screen } from '@testing-library/react';
import App from './App';
import Candidate from './pages/candidate';

test('renders learn react link', () => {
  render(<App />);
  render(<Candidate />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
