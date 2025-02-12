// needed write registration apis

import BaseApi from 'shared/api/baseApi';

const http = new BaseApi('');
export const fetchUserRegistration = (
  registRationFields: Record<string, any>
) => {
  console.log(registRationFields, 'registartion fields');
  return http.post('/sign-up', true);
};
