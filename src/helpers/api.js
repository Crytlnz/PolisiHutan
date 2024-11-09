import axios from 'axios';
        
const baseURL = 'https://api-kawal-desa.lskk.co.id';

const API = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;