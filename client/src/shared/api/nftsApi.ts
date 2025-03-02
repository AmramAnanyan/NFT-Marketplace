import BaseApi from './baseApi';

export const fetchTrendingUserNFTs = () => {
  const http = new BaseApi('');
  return http.get('/trending-user-nft');
};

export const fetchAllNfts = () => {
  const http = new BaseApi('');
  return http.get('/all-nfts');
};

export const fetchSearchNft = (query: string) => {
  const http = new BaseApi('');
  const body = new URLSearchParams();
  body.append('searchTerm', query);
  return http.post('/all-nfts', body, true);
};
