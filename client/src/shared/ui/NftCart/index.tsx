import { IUser } from 'shared/types';
import styles from './index.module.scss';
import { BASE_DEVELOPMENT_URL } from 'shared/constants/generic';

interface INftCart {
  id: string;
  nftName: string;
  image: string;
  nftCreatorName: IUser['name'];
  nftCreatorImage: IUser['avatarUrl'];
  highestBid: number;
  price: number;
  cryptoValet: string;
  creator: any;
  title: string;
}

// const nftCartData: INftCart = {
//   id: '1',
//   nftName: 'Shunik',
//   image: '',
//   nftCreatorName: 'Valod',
//   nftCreatorImage: '',
//   highestBid: 0.35,
//   price: 1.35,
//   cryptoValet: 'ETH'
//   creator:{}
// };
const NftCart = ({
  id,
  nftName,
  image,
  title,
  highestBid,
  price,
  cryptoValet,
  creator
}: INftCart) => {
  return (
    <div className={styles.container}>
      <img
        src={BASE_DEVELOPMENT_URL + image}
        alt=''
        className={styles.nftImage}
        width={320}
        height={340}
      />
      <div className={styles.description}>
        <h1>{nftName}</h1>
        <div className={styles.nftCreatorSection}>
          <div
            className={styles.nftCreatorImage}
            style={{
              // backgroundImage: `url(${
              //   BASE_DEVELOPMENT_URL + creator?.avatarUrl
              // })`
              backgroundImage: `url(${creator?.avatarUrl})`
            }}
          ></div>
          <p>{creator?.name}</p>
        </div>
        <div className={styles.nftPriceSection}>
          <p>
            <span> Price</span>

            <span>
              {price}
              {cryptoValet}
            </span>
          </p>
          <p>
            <span>{title}</span>
            <span>
              {highestBid}
              {cryptoValet}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NftCart;
