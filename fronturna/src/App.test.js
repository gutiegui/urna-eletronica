import { render, screen } from '@testing-library/react';
// import App from './App';
import Home from './pages/home';
import Candidate from './pages/candidate';


test('renders learn react link', () => {
  render(<Home />);
  render(<Candidate />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
