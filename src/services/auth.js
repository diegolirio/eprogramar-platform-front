import { http } from './config';

export default {
  signin: (email, password) => {
    let creds = { email, password };
    console.log(creds);
    return http.post('auth/signin', creds);
  },
};
