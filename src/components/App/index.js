import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default App;
