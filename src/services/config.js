import axios from 'axios';
import storage from '../services/storage';

axios.defaults.headers.common = {
  Authorization: `bearer ${storage.getToken()}`,
};
export const http = axios.create({
  baseURL:
    'https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/',
});
