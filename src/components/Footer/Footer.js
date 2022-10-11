import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  return (
    <nav className="Footer">
      <Link to="/about" className="Footer--link">A Propos</Link>
      {/* <Link to="/contact" className="Footer--link">Contactez-nous</Link> */}
    </nav>
  );
}

export default Footer;
