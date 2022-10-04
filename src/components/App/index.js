import { Route, Routes } from 'react-router-dom';

/* Style */
import './styles.scss';

/* Header and Footer */
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
import MyPosts from '../MyPosts/MyPosts';

/* Posts */
import WrapperResultPost from '../WrapperResultPost/wrapperResultPost';


// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generator" element={<WrapperResultPost />} />
        <Route path="/login" element={<Register />} />
        <Route path="/register" element={<Login />} />
        <Route path="/me" element={<InfoProfile />} />
        <Route path="/me/posts" element={<MyPosts />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* <Route path="*" element={<404 />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
