import BaseApi from './baseApi';

export const fetchTrendingUserNFTs = () => {
  const http = new BaseApi('');
  return http.get('/trending-user-nft');
};
