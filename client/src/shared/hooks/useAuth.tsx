import { useCallback, useEffect, useState } from 'react';
import { decodeJWT, isTokenExpired } from 'shared/helpers/global';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('privateToken')
  );
  useEffect(() => {
    if (isAuthenticated && isTokenExpired(isAuthenticated)) {
      setIsAuthenticated(null);
    }
  }, []);
  const setToken = useCallback((token: string) => {
    setIsAuthenticated('');
    localStorage.setItem('privateToken', token);
  }, []);
  const logout = useCallback(() => {
    setIsAuthenticated('');
    localStorage.clear();
  }, []);

  return { isAuthenticated, setToken, logout };
};
