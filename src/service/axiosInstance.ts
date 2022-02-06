import axios from 'axios';
import history from '../routes/browser-history';

const AxiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('params') as string);
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = token ? `Bearer ${token!.access_token}` : '';
    return config;
  },
  (err) => Promise.reject(err),
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) history.push('/login');
    return Promise.reject(err);
  },
);

export default AxiosInstance;
