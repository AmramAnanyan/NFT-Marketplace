// needed write registration apis

import BaseApi from 'shared/api/baseApi';

const http = new BaseApi('');
export const fetchUserRegistration = (
  registRationFields: Record<string, any>
) => {
  const form = new URLSearchParams();
  for (let key in registRationFields) {
    form.append(key, registRationFields[key]);
  }
  return http.post('/sign-up', form, true);
};
