import { Link, NavLink } from 'react-router-dom';
import './AboutUs.scss';
import imgEstelle from 'src/assets/Images/ERE.png';
import imgVincent from 'src/assets/Images/VPN.png';
import imgLoic from 'src/assets/Images/LPT.png';
import imgAlexandre from 'src/assets/Images/AJY.png';

// import SeparationBar from 'src/components/SeparationBar/SeparationBar';
// import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';

function AboutUs() {
  return (
    <div className="AboutUs">
      <h2 className="AboutUs-title AboutUs-title2">L'équipe</h2>
      <SeparationBar />
      <section className="AboutUs-cards">
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgEstelle} alt="photo Estelle" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Estelle Rozée</h3>
            <p className="AboutUs-card-content-role">Product owner</p>
          </div>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgVincent} alt="photo Vincent" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Vincent Péron</h3>
            <p className="AboutUs-card-content-role">Scrum / Git Master</p>
          </div>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgLoic} alt="photo Loic" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Loïc Picart</h3>
            <p className="AboutUs-card-content-role">Lead Dev' Front</p>
          </div>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src={imgAlexandre} alt="photo Alexandre" />
          <div className="AboutUs-card-content">
            <h3 className="AboutUs-card-content-name">Alexandre Jouany</h3>
            <p className="AboutUs-card-content-role">Lead Dev' Back</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
