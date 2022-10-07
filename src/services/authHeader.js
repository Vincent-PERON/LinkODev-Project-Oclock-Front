// pour faire une requête et savoir si l'accessToken du LocalStorage est expiré ou non
// si valide, on le renvoie = true, sinon, on renvoie un objet vide = false
export function authHeader() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  if (accessToken) {
    return { Authorization: `Bearer ${accessToken}` };
  }
  return {};
}

/* 
  Node.js Express back-end 
----------------------------------------------------------------
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
*/


// au moment du logout, on veut supprimer le token du LocalStorage
export const logOut = () => {
  localStorage.removeItem('accessToken');
}
