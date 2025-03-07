import BaseApi from './baseApi';

export const fetchUserData = () => {
  const http = new BaseApi('');
  return http.get('/user');
};

export const fetchTopCreators = (startRanking: number, endRanking: number) => {
  const http = new BaseApi('');
  return http.get(
    `/top-creators?startRanking=${startRanking}&endRanking=${endRanking}`
  );
};
