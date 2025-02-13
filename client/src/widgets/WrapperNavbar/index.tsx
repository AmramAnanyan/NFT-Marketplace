import { Outlet } from 'react-router';
import {
  HARD_CODE_FOOTER_NAVIGATION,
  HARD_CODE_NAVIGATION_BAR
} from 'shared/constants/navigation';
import Footer from 'shared/ui/Footer';
import NavBar from 'shared/ui/NavBar';
import styles from './index.module.scss';
const WrapperNavbar = () => {
  return (
    <>
      <header className={styles.header}>
        <NavBar
          navigations={HARD_CODE_NAVIGATION_BAR}
          brand={{ title: 'NFT Marketplace' }}
        />
      </header>
      <Outlet />
      <Footer navigations={HARD_CODE_FOOTER_NAVIGATION} />
    </>
  );
};

export default WrapperNavbar;
