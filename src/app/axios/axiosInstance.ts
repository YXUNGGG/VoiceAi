import process from "process";
import axios from "axios";

const baseURL = process.env.API_BASE_URL;

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

// пример кода обработчиков
// instance.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// });

// instance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );