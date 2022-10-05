// pour faire une requête et savoir si l'accessToken du LocalStorage est expiré ou non
// si valide, on le renvoie = true, sinon, on renvoie un objet vide = false
export function authHeader() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  if (accessToken) {
    return { Authorization: `Bearer ${accessToken}` };
  }
  return {};
}

// au moment du logout, on veut supprimer le token du LocalStorage
export function logOut() {
  return localStorage.removeItem('accessToken');
}
