import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_KINOPOISK_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY || '',
  },
};

const api = axios.create(config);

export default api;
