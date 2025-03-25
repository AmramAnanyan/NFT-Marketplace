import { useCallback, useEffect, useState } from 'react';
import { decodeJWT, isTokenExpired } from 'shared/helpers/global';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('privateToken')
  );
  const logout = useCallback(() => {
    setIsAuthenticated('');
    localStorage.clear();
  }, []);
  useEffect(() => {
    if (isAuthenticated && isTokenExpired(isAuthenticated)) {
      console.log('worked ===>>');
      logout();
    }
  }, []);
  const setToken = useCallback((token: string) => {
    setIsAuthenticated('');
    localStorage.setItem('privateToken', token);
  }, []);

  return { isAuthenticated, setToken, logout };
};
