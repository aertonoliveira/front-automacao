import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://automacao-service.herokuapp.com/api/',
})

export default api;