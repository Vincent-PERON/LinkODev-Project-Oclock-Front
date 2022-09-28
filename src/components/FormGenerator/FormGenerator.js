// import axios from 'axios';
import { useState } from 'react';

import data from 'src/data/tags.json';

import './FormGenerator.scss';
import SeparationBar from '../SeparationBar/SeparationBar';
import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';

function FormGenerator() {
  const [tags, setTags] = useState([]);
  // here the possibility to modify the state of checkboxes onClick. value by default : false
  const [checked, setChecked] = useState(true);

  // const cssClassNames = zenMode ? 'blog blog--zen' : 'blog';

  const handleChange = () => {
    setChecked(!checked);
    console.log(checked);
  };

  // // Au premier rendu du composant
  // useEffect(() => {
  //   // Je récupère les tâches depuis l'API
  //   axios.get('https://linkodevapi.cyber-one.fr/tags')
  //     .then((res) => {
  //       // Je les stocke dans mon state
  //       setTags(res.data);
  //     });
  // }, []);

  const toggleTagChecked = (tagId) => {
    axios.get(`http://linkodevapi.cyber-one.fr/tags`)
      .then(() => {
        const updatedTags = tags.map((tag) => {
          if (tag.id === tagId) {
            return {
              ...tag,
              checked: !checked,
            };
          }
          return tag;
        });

        setTags(updatedTags);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="FormGenerator">
      <h1 className="FormGenerator-title">Générateur de posts LinkedIn pour les développeurs webs</h1>
      <SeparationBar />
      <h2 className="FormGenerator-subtitle">Pour poster facilement sur des sujets dev' sans prise de tête !</h2>
      <h3 className="FormGenerator-description">Pour créer votre premier post, sélectionnez les tags qui correspondent à votre envie du jour et découvrez votre résultat.</h3>
      <section className="FormGenerator-card">
        <h4 className="FormGenerator-card-title">Que voulez-vous écrire aujourd'hui ?</h4>
        <p className="FormGenerator-card-description">(plusieurs choix possibles)</p>

        <form className="FormGenerator-form">
          <div className="FormGenerator-form-group-by-3">
            <ul className="FormGenerator-form-group">
              {data.map((tag) => (
                <li key={tag.id} className="FormGenerator-li">
                  <label className="FormGenerator-label">
                    <input
                      type="checkbox"
                      id={tag.id}
                      className="FormGenerator-checkbox"
                      checked={checked}
                      onChange={handleChange}
                    />
                    <span />
                    {tag.title}
                  </label>
                </li>
              ))}
            </ul>

            {/* <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input
                  className="FormGenerator-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span />
                Good News
              </label>
            </div>

            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input
                  className="FormGenerator-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span />
                React
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input
                  className="FormGenerator-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span />
                Prise de position
              </label>
            </div>
          </div>
          <div className="FormGenerator-form-group-by-3">
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input
                  className="FormGenerator-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span />
                Design web
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input
                  className="FormGenerator-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span />
                Autre catégorie
              </label>
            </div>
            <div className="FormGenerator-form-group">
              <label className="FormGenerator-label">
                <input
                  className="FormGenerator-checkbox"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <span />
                Autre catégorie
              </label>
            </div> */}
          </div>
        </form>
      </section>
      <section className="main__container--button">
        <div className="main__container--redline" />
        <PostGenerateButton />
        <div className="main__container--redline" />
      </section>

    </div>
  );
}

export default FormGenerator;
