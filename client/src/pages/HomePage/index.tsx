import HeroSection from 'widgets/HeroSection';
import styles from './index.module.scss';
import CollectionSection from 'widgets/ColectionSection';
import TopCreatorsSection from 'widgets/TopCreatorsSection';
import BrowseCategory from 'widgets/BrowsCategoriesSection';
import DiscoverMoreNftSection from 'widgets/DiscoverMoreNftsSection';
import { IUser } from 'shared/types';
import PublicAuction from 'entities/Home/ui/PublicAuction';
import { useEffect } from 'react';
import {
  getTopCreatorsAsync,
  getTrendingUsersNFTsAsync
} from 'features/Home/thunks';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import {
  selectTopCreators,
  selectTrendingUserNfts
} from 'entities/Home/model/trendUserNft';
interface INftCart {
  id: string;
  nftName: string;
  nftImage: string;
  nftCreatorName: IUser['name'];
  nftCreatorImage: IUser['avatarUrl'];
  highestBid: number;
  price: number;
  cryptoValet: string;
}
const HomePage = () => {
  const dispatch = useAppDispatch();
  const trendingUserNfts = useAppSelector(selectTrendingUserNfts);
  const topCreators = useAppSelector(selectTopCreators);
  useEffect(() => {
    dispatch(getTrendingUsersNFTsAsync());
    dispatch(getTopCreatorsAsync());
  }, []);
  return (
    <main className={styles.container}>
      <HeroSection />
      <CollectionSection />
      <TopCreatorsSection creators={topCreators} />
      <BrowseCategory />
      <DiscoverMoreNftSection data={trendingUserNfts} />
      <PublicAuction />
    </main>
  );
};

export default HomePage;
