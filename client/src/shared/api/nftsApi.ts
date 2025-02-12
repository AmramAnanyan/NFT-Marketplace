import BaseApi from './baseApi';

const http = new BaseApi('api/v1');

export const fetchTrendingUserNFTs = () => {
  return http.get('/trending-user-nft');
};
