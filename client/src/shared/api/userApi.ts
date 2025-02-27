import BaseApi from './baseApi';

export const fetchUserData = () => {
  const http = new BaseApi('');
  return http.get('/user');
};
