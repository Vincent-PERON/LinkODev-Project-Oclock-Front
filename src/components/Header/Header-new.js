import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/Images/Logo_3.png';

import ConnexionButton from 'src/components/Buttons/ConnexionButton/ConnexionButton';
import RegisterButton from 'src/components/Buttons/RegisterButton/RegisterButton';
import LogOutButton from 'src/components/Buttons/LogOutButton/LogOutButton';
import MyPosts from 'src/components/Buttons/MyPosts/MyPosts';
import ProfileButton from '../Buttons/ProfileButton/ProfileButton';

import './Header.scss';


function Header() {

  const isLogged = useSelector((state) => state.user.isLogged);
  const firstname = JSON.parse(localStorage.getItem('user'));

  
  return (
    <header className="header">
      <section className="header__main__section">

           {/* // LOGO  */}
            <section className="header__section--left">
              <Link to="/">
                <img src={logo} alt="logo LinkO'Dev" className="header--logo" />
              </Link>
            </section>
            
            
            {/* // REGISTER BUTTON + LOGIN BUTTON  */}
            <section className="header__section--right">

            {!isLogged && (
              <>
                <div className="header--noLogged-buttons">

                    {/* REGISTER BUTTON */}
                    <NavLink to="/register">
                      <RegisterButton />
                    </NavLink>

                    {/* LOGIN BUTTON  */}
                    <NavLink to="/login">
                      <ConnexionButton />
                    </NavLink>
                </div>
            
            </>
            )};

            {isLogged && (
              <>
                   {/* // AVATAR + WELCOME */}
                  <div className="header--Logged-buttons">
                    <NavLink to="/me">
                      <ProfileButton />
                    </NavLink>
                    <p className="header__Logged-message">Bienvenue {firstname}</p>
                  </div>

                  {/* // MY POSTS + LOGOUT */}
                  <section className="header__Loggedsection--center">
                    <div className="header__Logged-buttons--myposts">
                      <NavLink to="/me/posts">
                        <MyPosts  />
                        </NavLink>
                      </div>
                    <div className="header__Logged-buttons--logout">
                      <LogOutButton />
                    </div>
                  </section>
              </>
          )}
          

          </section>

      </section>


      
    </header>
  );
}

export default Header;
