//@ts-nocheck
import UserCart from 'shared/ui/UserCart';
import styles from './index.module.scss';
import ButtonUI from 'shared/ui/ButtonUI';
import { useEffect, useMemo, useState } from 'react';
import AuctionTimer from 'shared/ui/AuctionTimer';
import useWindowSize from 'shared/hooks/useWindowSize';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { selectTopCreators } from 'entities/Home/model/trendUserNft';
import { IUser } from 'shared/types';

const PublicAuction = () => {
  const [state, setState] = useState<any>({ pos: 50 });
  const creators: IUser[] = useAppSelector(selectTopCreators);
  const n1Creator = useMemo(
    () =>
      creators?.find((creator) => {
        return creator.ratingIndex === 1;
      }),
    [creators.length]
  );
  const windowSize = useWindowSize();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setState({ ...state, pos: state.pos + 50 })
  //   }, 100)
  // }, [state])
  return (
    <section className={styles.auctionConteiner}>
      <img
        src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/screen-tablet@1x.png'
        alt='Auction Image'
        width={windowSize.innerWidth}
        height='400'
        className={styles.auctionImage}
      />
      <div
        className={styles.auctionInfoSection}
        style={{
          transform: `translate(${-50}%, ${-state.pos}%)`,
          transition: 'ease 0.3s'
        }}
      >
        <div>
          <div className={styles.auctionOwner}>
            <UserCart user={n1Creator} />
          </div>
          <div>
            <h3 className={styles.auctionTitle}>Mashroom Magic</h3>
          </div>
          <div>
            <ButtonUI isLoading={false} text='See NFT' rightIconSrc='' />
          </div>
        </div>
        <div>
          <AuctionTimer hours={24} minutes={58} seconds={10} />
        </div>
      </div>
    </section>
  );
};

export default PublicAuction;
