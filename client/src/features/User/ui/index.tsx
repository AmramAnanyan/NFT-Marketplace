import SideBar from 'shared/ui/SideBar';
import Profile from '../../../entities/ProfileCart/ui/profile';
import styles from './index.module.scss';
import ProductBar from './productBar';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { getUserDataAsync } from '../thunks';

const ProfileFeatures = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserDataAsync());
  }, []);
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
