import axios from "axios";

export const apiClient = axios.create(
  {
    // baseURL: 'https://jsonplaceholder.typicode.com',
    baseURL: 'http://localhost:3001',
    responseType: 'json'
  }
);