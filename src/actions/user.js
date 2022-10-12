
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_EMAIL_USER = 'SAVE_EMAIL_USER';
export const CHANGE_MY_EMAIL = 'CHANGE_MY_EMAIL';
export const CHANGE_MY_PASSWORD = 'CHANGE_MY_PASSWORD';
export const LOG_OUT = 'LOG_OUT';
export const SUBMIT_REGISTER_FORM = 'SUBMIT_REGISTER_FORM';
export const RESET_REGISTER_FORM = 'RESET_REGISTER_FORM';
export const ERROR_CONFIRM_PASSWORD = 'ERROR_CONFIRM_PASSWORD';
export const ERROR_BACK = 'ERROR_BACK';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const GET_USER_INFOS = 'GET_USER_INFOS';

/**
 * action dispatchée sur le onChange d'un input du Login form ou du Register form
 * @param {string} newValue : nouvelle valeur de l'input récupérée dans le event.target.value
 * @param {string} inputName : le nom de l'input et de l'emplacement de la valeur dans le
 * state (lastname, firstname, email, password, confirmPassword), récupéré dans le event.target.name
 */

export const actionChangeInputValue = (newValue, inputName) => ({
  type: CHANGE_INPUT_VALUE,
  newValue: newValue,
  inputName: inputName,
});

/**
 * action dispatchée sur le submit du Login.  action interceptée par
 * un middleware pour qu'il interroge l'api sur la route /login
 */
export const actionCheckLogin = () => ({
  type: CHECK_LOGIN,
});


/**
 * action dispatchée quand le authmiddelware reçoit une réponse du serveur /login
 * sauvegarde du token dans le state via le reducer
 * @param {string} token : le token à sauvegarder du user tout juste connecté
 */
export const actionSaveUser = (token, firstname) => ({
  type: SAVE_USER,
  firstname,
  token,
});

/**
 * action dispatchée au click sur le bouton se déconnecter du Header
 * le reducer doit supprimer le token enregistré dans le state et passer isLogged: false
 */
export const actionLogOut = () => ({
  type: LOG_OUT,
});

/**
 * action dispatchée sur le submit du Register.  action interceptée par
 * l'authMiddleware pour qu'il enregistre dans l'API les infos du user route /register
 * @param {string} lastname : le nom à sauvegarder du user tout juste créé
 * @param {string} firstname : le prénom à sauvegarder du user tout juste créé
 * @param {string} email : l'email à sauvegarder du user tout juste créé
 * @param {string} password : le mot de passe à sauvegarder du user tout juste créé
 */
export const actionSubmitRegisterForm = (successCallback) => ({
  type: SUBMIT_REGISTER_FORM,
  successCallback,
});

export const actionResetRegisterForm = () => ({
  type: RESET_REGISTER_FORM,
});

/**
 * action dispatchée au submit du Login Form, si une erreur est remontée par le back
 * elle doit s'afficher en messageBack dans le state pour être utilisée dans le LoginForm
 */
export const actionErrorLogin = (messageLogin) => ({
  type: ERROR_LOGIN,
  messageLogin,
});

/**
 * action dispatchée au submit du Register Form, si une erreur est remontée par le back
 * elle doit s'afficher en messageBack dans le state pour être utilisée dans le RegisterForm
 */
export const actionErrorBack = (messageBack) => ({
  type: ERROR_BACK,
  messageBack,
});

/**
 * action dispatchée au submit du Register Form, si password !== confirmPassword
 * le reducer doit afficher un message d'erreur : les mots de passe ne correspondent pas
 */
export const actionErrorConfirmPassword = () => ({
  type: ERROR_CONFIRM_PASSWORD,
});

/**
 * action dispatchée sur le submit du Login.  action interceptée par
 * un middleware pour qu'il interroge l'api sur la route /login
 */
export const actionGetUserInfos = () => ({
  type: GET_USER_INFOS,
});

export const actionSaveEmailUser = (email) => ({
  type: SAVE_EMAIL_USER,
  email,
});

export const actionChangeMyEmail = () => ({
  type: CHANGE_MY_EMAIL,
});

export const actionChangeMyPassword = () => ({
  type: CHANGE_MY_PASSWORD,
});




