import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8091/api/',
  // Produção
  baseURL: 'http://207.154.231.193:8091/api/',
  // Dev
  // baseURL: 'https://jin-dev.herokuapp.com/api/',
});

// Add a 401 response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {


      // Apaga todo o localstorage
      localStorage.clear();

      // redireciona o usuário para a tela inicial
      window.location.href = '/';
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
