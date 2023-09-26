import { Link } from 'react-router-dom';

export function Test() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
    </div>
  );
}
