import { http } from './config';

export default {
  signin: async (email, password) => {
    return await http.post('auth/signin', { email, password });
  },
};
