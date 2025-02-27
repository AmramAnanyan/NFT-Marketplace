import HeroSection from 'widgets/HeroSection';
import styles from './index.module.scss';
import CollectionSection from 'widgets/ColectionSection';
import TopCreatorsSection from 'widgets/TopCreatorsSection';
import BrowseCategory from 'widgets/BrowsCategoriesSection';
import DiscoverMoreNftSection from 'widgets/DiscoverMoreNftsSection';
import { IUser } from 'shared/types';
import PublicAuction from 'entities/Home/ui/PublicAuction';
import { useEffect } from 'react';
import { getTrendingUsersNFTsAsync } from 'features/Home/thunks';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { selectTrendingUserNfts } from 'entities/Home/model/trendUserNft';
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
  const nftCartData: INftCart = {
    id: '1',
    nftName: 'Shunik',
    nftImage:
      'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-52@2x.png',
    nftCreatorName: 'Valod',
    nftCreatorImage:
      'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-89@2x.png',
    highestBid: 0.35,
    price: 1.35,
    cryptoValet: 'ETH'
  };

  useEffect(() => {
    dispatch(getTrendingUsersNFTsAsync());
  }, []);
  return (
    <main className={styles.container}>
      <HeroSection />
      <CollectionSection />
      <TopCreatorsSection />
      <BrowseCategory />
      <DiscoverMoreNftSection data={trendingUserNfts} />
      <PublicAuction />
    </main>
  );
};

export default HomePage;
