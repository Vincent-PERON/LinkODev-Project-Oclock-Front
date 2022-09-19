import './Header.scss';
import ConnexionButton from 'src/components/Buttons/ConnexionButton/ConnexionButton';
import RegisterButton from 'src/components/Buttons/RegisterButton/RegisterButton';
import LogOutButton from 'src/components/Buttons/LogOutButton/LogOutButton';
import MyPosts from 'src/components/Buttons/MyPosts/MyPosts';
import logo from '../../assets/Images/Logo_3.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo LinkO'Dev" className="header--logo" />
      <div className="header--Logged-buttons">
        <MyPosts />
        <LogOutButton />
      </div>
      <div className="header--noLogged-buttons">
        <RegisterButton />
        <ConnexionButton />
      </div>

    </header>
  );
}

export default Header;
