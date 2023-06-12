import axios from 'axios';

export async function register(name, age, email, password) {
  try {
    const response = await axios.post('/api/register', { name, age, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
}
