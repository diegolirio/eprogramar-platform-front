const TOKEN_KEY = 'TOKEN';
const CURRENT_USER_KEY = 'CURRENT_USER';
const PROFILE = 'PROFILE';

export default {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  getTokenBearer: () => {
    const tokenBearer = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
    return `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
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
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
  },
  logout: () => {
    localStorage.clear();
  },
};
