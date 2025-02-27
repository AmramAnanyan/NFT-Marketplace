import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'shared/types';
import styles from './index.module.scss';
interface IColection {
  id: string;
  colectionName: string;
  colectionImages: Array<any>;
  userName: IUser['name'];
  userImage: IUser['avatarUrl'];
}
const url =
  'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-3@2x.png';
const ColectionCart = ({
  id,
  colectionName,
  colectionImages,
  userName,
  userImage
}: IColection) => {
  return (
    <div className={styles.colectionCartConteinter}>
      <div className={styles.colectionImageContainer}>
        {colectionImages.map((item, index) => {
          if (index <= 3) {
            return (
              <div
                className={styles.colectionImageWrraper}
                key={item.id}
                style={{ backgroundImage: `url(${url})` }}
                onClick={() => console.log('cliced hahahah')}
              >
                <span></span>
              </div>
            );
          }
        })}
      </div>
      <h4 className={styles.colectionName}>{colectionName}</h4>
      <div className={styles.userInfo}>
        <Link to={''}>
          <img src={url} alt='' />
        </Link>
        <Link to=''>{userName}</Link>
      </div>
    </div>
  );
};

export default ColectionCart;
