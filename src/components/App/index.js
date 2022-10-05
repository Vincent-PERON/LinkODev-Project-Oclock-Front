import { Route, Routes, Outlet } from 'react-router-dom';

/* Style */
import './styles.scss';

/* Header, Footer and 404 */
import Error from 'src/components/Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

/* Authentication */
import Login from '../Register/Register';
import Register from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

// import FormGenerator from '../FormGenerator/FormGenerator';
// import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';
// import Posts from '../Posts/Posts';

/* User Profile */
import InfoProfile from '../InfoProfile/InfoProfile';
import MyFavoritesPosts from '../MyFavoritesPosts/MyFavoritesPosts';

/* Posts */
import WrapperResultPost from '../WrapperResultPost/wrapperResultPost';

// Composant Layout = Header + Footer
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        {/* Route without Header and Footer for page 404 */}
        <Route path="*" element={<Error />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/generator" element={<WrapperResultPost />} />
          <Route path="/login" element={<Register />} />
          <Route path="/register" element={<Login />} />
          <Route path="/me" element={<InfoProfile />} />
          <Route path="/me/posts" element={<MyFavoritesPosts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

// == Export
export default App;
