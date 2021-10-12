import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://group-cycling-backend.herokuapp.com/',
});

