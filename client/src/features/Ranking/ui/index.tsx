import { selectTopCreators } from 'entities/Home/model/trendUserNft';
import { getTopCreatorsAsync } from 'features/Home/thunks';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { IUser } from 'shared/types';
import UserCart from 'shared/ui/UserCart';
import styles from './index.module.scss';
const RankingFeatures = () => {
  const dispatch = useAppDispatch();
  const topCreators: IUser[] = useAppSelector(selectTopCreators);
  useEffect(() => {
    dispatch(getTopCreatorsAsync({ startRanking: 0, endRanking: 100 }));
  }, []);
  return (
    <div>
      {topCreators.map((creator) => {
        return (
          <div className={styles.cart_container}>
            <UserCart user={creator} className={styles.cart} />
          </div>
        );
      })}
    </div>
  );
};

export default RankingFeatures;
