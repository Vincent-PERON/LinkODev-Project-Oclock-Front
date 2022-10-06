import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  return (
    <nav className="Footer">
      <div className="Footer--navbar">
        <Link className="Footer--link" to="/about" > A Propos </Link>
        <Link className="Footer--link" to="/contact" > Contactez-nous </Link>
      </div>
    </nav>
  );
}

export default Footer;
