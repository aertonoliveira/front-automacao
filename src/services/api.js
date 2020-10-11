import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Add a 401 response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      window.alert(
        'Seu tempo de acesso expirou, estamos te redirecionando para a pagina de login'
      );

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
