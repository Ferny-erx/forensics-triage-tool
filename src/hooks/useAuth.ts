import { useState } from 'react';
import { login } from '../services/authAPI';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const authenticate = async (username: string, password: string) => {
    const data = await login(username, password);
    setUser(data);
  };

  return { user, authenticate };
};
