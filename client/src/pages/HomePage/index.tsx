import HeroSection from 'widgets/HeroSection'
import styles from './index.module.scss'
import ColectionSection from 'widgets/ColectionSection'
import TopCreatorsSection from 'widgets/TopCreatorsSection'
import CategoryCard from 'shared/ui/CategoryCart'
import BrowseCategory from 'widgets/BrowsCategoriesSection'
import DiscoverMoreNftSection from 'widgets/DiscoverMoreNftsSection'
import { IUser } from 'shared/types'

import nftCreatorImage from '../../shared/assets/pngIcon/User.png'
import InputUi from 'shared/ui/InputUI'
import PublicAuction from 'entities/PublicAuction'

const HomePage = () => {
  interface INftCart {
    id: string
    nftName: string
    nftImage: string
    nftCreatorName: IUser['name']
    nftCreatorImage: IUser['image']
    highestBid: number
    price: number
    cryptoValet: string
  }

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
  }

  return (
    <main className={styles.container}>
      <HeroSection />
      <ColectionSection />
      <TopCreatorsSection />
      <BrowseCategory />
      {/* @ts-ignore */}
      <DiscoverMoreNftSection data={nftCartData} />
      <PublicAuction />
    </main>
  )
}

export default HomePage
