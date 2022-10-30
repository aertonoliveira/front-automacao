import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/api/',
  // Produção
  // baseURL: 'https://automacao-service.herokuapp.com/api/',
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
