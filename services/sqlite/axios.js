import axios from 'axios';

const api = axios.create({
  baseURL: 'https://groupciclying-default-rtdb.firebaseio.com/',
});

export default api;