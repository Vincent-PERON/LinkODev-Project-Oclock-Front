import './Footer.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <nav className="Footer">
      <NavLink to="/apropos">A Propos</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Footer;
