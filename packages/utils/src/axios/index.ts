import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fe-challenge.cicadatech.net/',
  headers: {
    'Content-Type': 'application/json',
  },
});