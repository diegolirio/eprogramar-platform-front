import { http } from './config';

export default {
  signin: (email, password) => {
    return http.post('auth/signin', { email, password }); 
  },
};
