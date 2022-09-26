import './Header.scss';
import ConnexionButton from 'src/components/Buttons/ConnexionButton/ConnexionButton';
import RegisterButton from 'src/components/Buttons/RegisterButton/RegisterButton';
import LogOutButton from 'src/components/Buttons/LogOutButton/LogOutButton';
import MyPosts from 'src/components/Buttons/MyPosts/MyPosts';
import logo from '../../assets/Images/Logo_3.png';

function Header() {
  return (
    <header className="header">
      <section className="header__main__section">
        <section className="header__section--left">
          <img src={logo} alt="logo LinkO'Dev" className="header--logo" href="/" />
        </section>
        <section className="header__section--right">
          <div className="header--noLogged-buttons">
            <RegisterButton />
            <ConnexionButton />
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
