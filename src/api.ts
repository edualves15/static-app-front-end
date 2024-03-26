// api.js
import axios from 'axios';

// Configuração da URL base para todas as requisições
axios.defaults.baseURL = 'http://localhost:3000';

// Envio de cookies com cada requisição
axios.defaults.withCredentials = true;

export default axios;
