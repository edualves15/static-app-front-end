// api.js
import axios from 'axios';

// // Back-end local
// axios.defaults.baseURL = 'http://localhost:3030';

// Back-end remoto
// axios.defaults.baseURL = 'https://hidrolab-backend-service-6ssfthxdpa-rj.a.run.app';

// Frontend e backend servidos sob a mesma origem
axios.defaults.baseURL = window.location.origin;

// Envio de cookies com cada requisição
axios.defaults.withCredentials = true;

export default axios;
