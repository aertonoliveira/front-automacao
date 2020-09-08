import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jin-dev.herokuapp.com/api',
});

export default api;
