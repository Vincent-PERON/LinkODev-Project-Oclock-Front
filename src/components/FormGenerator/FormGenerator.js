import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionSaveGeneratedPost } from 'src/actions/post';

import './FormGenerator.scss';
import SeparationBar from '../SeparationBar/SeparationBar';
import PostGenerateButton from '../Buttons/PostGenerateButton/PostGenerateButton';

function FormGenerator({ setGeneratedPost }) {
  const dispatch = useDispatch();

  const [tags, setTags] = useState([]);
  const [checkedTags, setCheckedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    const selectedTagsURL = JSON.stringify(checkedTags);
    axios.get(`https://linkodevapi.cyber-one.fr/posts/random?tags=${selectedTagsURL}`)
      .then((response) => {
        setGeneratedPost(response.data);

        const generatedPost = [response.data.introduction.id, response.data.body.id, response.data.conclusion.id];
        const action = actionSaveGeneratedPost(generatedPost);
        dispatch(action);
      }).catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  // Au premier rendu du composant
  useEffect(() => {
    // Je récupère les tâches depuis l'API
    axios.get('https://linkodevapi.cyber-one.fr/tags')
      .then((res) => {
        // Je les stocke dans mon state
        setTags(res.data);
      }).catch((err) => {
        console.error(err);
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
              {tags.map((tag) => (
                <li key={tag.id} className="FormGenerator-li">
                  <label htmlFor={tag.id} className="FormGenerator-label">
                    <input
                      type="checkbox"
                      id={tag.id}
                      value={tag.id}
                      className="FormGenerator-checkbox"
                      disabled={isLoading}
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
            <PostGenerateButton disabled={isLoading} />
            <div className="main__container--redline" />
          </section>
        </form>
      </section>

    </div>
  );
}

FormGenerator.propTypes = {
  setGeneratedPost: PropTypes.func.isRequired,
};

export default FormGenerator;
