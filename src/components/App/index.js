import { Route, Routes } from 'react-router-dom';

import './styles.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Register/Register';
import Register from '../Login/Login';
import AboutUs from '../AboutUs/AboutUs';
import FormGenerator from '../FormGenerator/FormGenerator';
import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import InfoProfile from '../InfoProfile/InfoProfile';
import Posts from '../Posts/Posts';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generator" element={<FormGenerator />} />
        <Route path="/generator/result" element={<FormGenerator />} />
        <Route path="/login" element={<Register />} />
        <Route path="/register" element={<Login />} />
        <Route path="/profile" element={<InfoProfile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* <Route path="*" element={<404 />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;