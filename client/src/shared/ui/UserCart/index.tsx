import { FC } from 'react';
import UserOnlineStatus from '../UserOnlineStatus';
import styles from './index.module.scss';
import { IUser } from 'shared/types';
interface IUserCart {
  user?: IUser;
  className?: string;
}

const UserCart: FC<IUserCart> = ({ className, user }) => {
  if (!user) {
    return <div>Loader</div>;
  }
  return (
    <div className={`${styles.conteiner} ${className || ''}`}>
      <span className={styles.rank}>{user.ratingIndex}</span>
      {user.isActive && (
        <UserOnlineStatus classN={styles.pulse} online={user.isActive} />
      )}
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${user.avatarUrl})` }}
      ></div>
      <h5>{user.name}</h5>
      <p>
        Total Sales:{'  '}
        <span>
          {user.totalSales} {user.currency}
        </span>
      </p>
    </div>
  );
};

export default UserCart;
