import { Link, NavLink } from 'react-router-dom';

import './Header.scss';
import ConnexionButton from 'src/components/Buttons/ConnexionButton/ConnexionButton';
import RegisterButton from 'src/components/Buttons/RegisterButton/RegisterButton';
import LogOutButton from 'src/components/Buttons/LogOutButton/LogOutButton';
import MyPosts from 'src/components/Buttons/MyPosts/MyPosts';
import logo from '../../assets/Images/Logo_3.png';
import Profil from '../dashboard/profil/profil';

function Header() {
  return (
    <header className="header">
      <section className="header__main__section">
        <section className="header__section--left">
          <Link to="/">
            <img src={logo} alt="logo LinkO'Dev" className="header--logo" />
          </Link>
        </section>
        <section className="header__section--right">
          <div className="header--noLogged-buttons">
            <NavLink
              to="/register"
            ><RegisterButton />
            </NavLink>
            <NavLink
              to="/login"
            ><ConnexionButton />
            </NavLink>
            <Profil />
          </div>
        </section>
      </section>
      <section className="header__section--center">
        <div className="header__Logged-buttons--myposts">
          <MyPosts />
        </div>
        <div className="header__Logged-buttons--logout">
          <LogOutButton />
        </div>
      </section>
    </header>
  );
}

export default Header;
