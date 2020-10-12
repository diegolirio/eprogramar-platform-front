import axios from 'axios';

const token = localStorage.getItem('TOKEN');
axios.defaults.headers.common = { Authorization: `bearer ${token}` };
export const http = axios.create({
  baseURL:
    'https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/',
});
