import styles from './index.module.scss';
import UserCart from 'shared/ui/UserCart';

const Profile = () => {
  return (
    <aside className={styles.cart_wrapper}>
      <UserCart className={styles.cart_styles} />
    </aside>
  );
};

export default Profile;
