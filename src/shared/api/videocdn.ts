import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_VIDEO_CDN_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
  if (!config.params) {
    config.params = {};
  }

  config.params.api_token = process.env.REACT_APP_VIDEO_CDN_API_KEY;

  return config;
});

export default api;
