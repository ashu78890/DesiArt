import axios from 'axios';

  export const  API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // for sending cookies (if needed)
});

export const registerUser = async (userData) => {
  const response = await API.post('/users/register', userData);
  return response.data;
};
