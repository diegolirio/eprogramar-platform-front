import { http } from './config';
import storage from './storage';

export default {
  getByEmail: async (email) => {
    const options = {
      headers: {
        Authorization: storage.getTokenBearer(),
      },
    };
    return await http.get(`users/${email}`, options);
  },
};
