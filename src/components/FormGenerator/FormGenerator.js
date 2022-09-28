import axios from 'axios';
import { useState } from 'react';

import data from 'src/data/tags.json';

import './FormGenerator.scss';
import SeparationBar from '../SeparationBar/SeparationBar';
import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';

function FormGenerator() {
  const [tags, setTags] = useState([]);
  const [checkedTags, setCheckedTags] = useState([]);

  const selectedTag = (event) => {
    // si case cochée, on veut ajouter l'id, sinon, on veut supprimer l'id de la liste
    if (event.target.checked) {
      setCheckedTags([...checkedTags, Number(event.target.value)]);
    }
    else {
      setCheckedTags(checkedTags.filter((tagId) => Number(event.target.value) !== tagId));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedTagsURL = JSON.stringify(checkedTags);
    axios.get(`https://linkodevapi.cyber-one.fr/posts/random?tags=${selectedTagsURL}`)
      .then((response) => {
        console.log(response);
        const post = response.data;
      })
  };

  // Au premier rendu du composant
  useEffect(() => {
    // Je récupère les tâches depuis l'API
    axios.get('https://linkodevapi.cyber-one.fr/tags')
      .then((res) => {
        // Je les stocke dans mon state
        setTags(res.data);
      });
  }, []);

  return (
    <div className="FormGenerator">
      <h1 className="FormGenerator-title">Générateur de posts LinkedIn pour les développeurs webs</h1>
      <SeparationBar />
      <h2 className="FormGenerator-subtitle">Pour poster facilement sur des sujets dev' sans prise de tête !</h2>
      <h3 className="FormGenerator-description">Pour créer votre premier post, sélectionnez les tags qui correspondent à votre envie du jour et découvrez votre résultat.</h3>
      <section className="FormGenerator-card">
        <h4 className="FormGenerator-card-title">Que voulez-vous écrire aujourd'hui ?</h4>
        <p className="FormGenerator-card-description">(plusieurs choix possibles)</p>

        <form
          className="FormGenerator-form"
          onSubmit={handleSubmit}
        >
          <div className="FormGenerator-form-group-by-3">
            <ul className="FormGenerator-form-group">
              {data.map((tag) => (
                <li key={tag.id} className="FormGenerator-li">
                  <label htmlFor={tag.id} className="FormGenerator-label">
                    <input
                      type="checkbox"
                      id={tag.id}
                      value={tag.id}
                      className="FormGenerator-checkbox"
                      // dans notre tableau checkedTags, on vérifie la présence du tag.id :
                      // si oui, c'est coché, sinon non
                      checked={checkedTags.includes(tag.id)}
                      onChange={selectedTag}
                    />
                    {tag.title}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <section className="main__container--button">
            <div className="main__container--redline" />
            <PostGenerateButton />
            <div className="main__container--redline" />
          </section>
        </form>
      </section>

    </div>
  );
}

export default FormGenerator;
