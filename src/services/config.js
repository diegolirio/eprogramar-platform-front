import axios from 'axios';
//import storage from '../services/storage';

axios.defaults.headers.common = {
  // TODO deveria passar em todas as requests mas não esta passando
  //      tive que passar direto no get de Profile
  // //      precisamos resolver
  // Authorization: storage.getTokenBearer(),
};
export const http = axios.create({
  baseURL:
    'https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/',
});
