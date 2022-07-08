import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://rickandmortyapi.com/api',
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros',
});

export const apiEx = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
