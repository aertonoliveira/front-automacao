import api from '../services/api';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

export const removeToken = () => {
  localStorage.setItem('token', '');
  api.defaults.headers.Authorization = '';
};
