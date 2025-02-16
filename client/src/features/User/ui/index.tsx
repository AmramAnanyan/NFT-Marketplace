import SideBar from 'shared/ui/SideBar';
import Profile from '../../../entities/ProfileCart/ui/profile';
import styles from './index.module.scss';
import ProductBar from './productBar';

const ProfileFeatures = () => {
  return (
    <>
      <SideBar />
      <div className={styles.container}>
        <Profile />
        <ProductBar />
      </div>
    </>
  );
};

export default ProfileFeatures;
