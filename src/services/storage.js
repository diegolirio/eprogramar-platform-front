const TOKEN_KEY = 'TOKEN';
const CURRENT_USER_KEY = 'CURRENT_USER';

export default {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  saveToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  saveCurrentUser: (currentUser) => {
    localStorage.setItem(CURRENT_USER_KEY, currentUser);
  },
  getCurrentUser: () => {
    return localStorage.getItem(CURRENT_USER_KEY);
  },
  isLoggedIn: () => {
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
  },
};
