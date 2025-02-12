import HomePageModelNFT from 'entities/HomePageNFTModel/ui';
import { HomePageTitle } from '../../entities';
import styles from './index.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <HomePageTitle />
      <HomePageModelNFT />
    </section>
  );
};

export default HeroSection;
