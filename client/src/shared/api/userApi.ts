import BaseApi from './baseApi';

const http = new BaseApi('');
export const fetchUserData = () => {
  return http.get('/user');
};
