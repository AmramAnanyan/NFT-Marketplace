import BaseApi from './baseApi';

const http = new BaseApi('');

export const fetchTrendingUserNFTs = () => {
  return http.get('/trending-user-nft');
};
