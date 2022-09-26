import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AboutUs from '../AboutUs/AboutUs';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
      <AboutUs />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

// == Export
export default App;
