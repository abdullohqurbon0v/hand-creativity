import axios from 'axios';

export const backend = axios.create({
     baseURL: 'http://localhost:5000/api/',
     timeout: 10000,
     headers: {
          'Content-Type': 'application/json',
     },
});

backend.interceptors.request.use(
     (config) => {
          const token = localStorage.getItem('access_token');
          if (token) {
               config.headers['Authorization'] = `Bearer ${token}`;
          }

          config.headers['X-Custom-Header'] = 'CustomHeaderValue';
          config.headers['Accept-Language'] = 'en-US';

          console.log('Request Headers:', config.headers);
          return config;
     },
     (error) => {
          return Promise.reject(error);
     }
);
