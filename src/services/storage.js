const TOKEN_KEY = 'TOKEN';
const CURRENT_USER_NAME_KEY = 'CURRENT_USER_NAME';
const CURRENT_USER_EMAIL_KEY = 'CURRENT_USER_EMAIL';
const PROFILE = 'PROFILE';

export default {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  getTokenBearer: () => {
    //const tokenBearer = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
    return `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
  },
  saveToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  saveCurrentUser: (cuurentUserName, currentUserEmail) => {
    localStorage.setItem(CURRENT_USER_NAME_KEY, cuurentUserName);
    localStorage.setItem(CURRENT_USER_EMAIL_KEY, currentUserEmail);
  },
  getCurrentUser: () => {
    return localStorage.getItem(CURRENT_USER_EMAIL_KEY);
  },
  getCurrentUserName: () => {
    return localStorage.getItem(CURRENT_USER_NAME_KEY);
  },
  setProfile: (user) => {
    const profile = {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    localStorage.setItem(PROFILE, JSON.stringify(profile));
  },
  getProfile: () => {
    return JSON.parse(localStorage.getItem(PROFILE));
  },
  isLoggedIn: () => {
    return localStorage.getItem(CURRENT_USER_NAME_KEY) !== null;
  },
  logout: () => {
    localStorage.clear();
  },
};
