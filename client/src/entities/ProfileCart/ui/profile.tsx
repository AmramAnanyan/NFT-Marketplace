import { useAppSelector } from 'shared/hooks/useAppSelector';
import styles from './index.module.scss';
import UserCart from 'shared/ui/UserCart';
import { selectUserData } from 'entities/User/model';

const Profile = () => {
  const user = useAppSelector(selectUserData);

  return (
    <aside className={styles.cart_wrapper}>
      <UserCart className={styles.cart_styles} user={user} />
    </aside>
  );
};

export default Profile;
