import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/userService';

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // Check if user is already authenticated (e.g., by checking local storage for a token)
    const token = localStorage.getItem('token');
    if (token) {
      // Perform additional validation if necessary (e.g., by decoding the token)
      // Set the user in the state
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await login(email, password);
      const token = response.token;
      // Store the token in local storage or state for authentication
      localStorage.setItem('token', token);
      setUser({ token });
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  const logout = () => {
    // Clear the authentication token from local storage or state
    localStorage.removeItem('token');
    setUser(null);
    history.push('/');
  };

  return { user, loading, login, logout };
}

export default useAuth;
