import { IUser } from 'shared/types';
import nftImage from '../../assets/pngIcon/PaintBrush.png';
import styles from './index.module.scss';
import { BASE_DEVELOPMENT_URL } from 'shared/constants/generic';

interface INftCart {
  id: string;
  nftName: string;
  image: string;
  nftCreatorName: IUser['name'];
  nftCreatorImage: IUser['image'];
  highestBid: number;
  price: number;
  cryptoValet: string;
}

const nftCartData: INftCart = {
  id: '1',
  nftName: 'Shunik',
  image: '',
  nftCreatorName: 'Valod',
  nftCreatorImage: '',
  highestBid: 0.35,
  price: 1.35,
  cryptoValet: 'ETH'
};
const NftCart = ({
  id,
  nftName,
  image,
  nftCreatorName,
  nftCreatorImage,
  highestBid,
  price,
  cryptoValet
}: INftCart) => {
  console.log(image);
  console.log(BASE_DEVELOPMENT_URL, 'BASE_DEVELOPMENT_URL');
  console.log(`url(${image})`, 'xi arararra');
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
            style={{ backgroundImage: `url(${nftCreatorImage})` }}
          ></div>
          <p>{nftCreatorName}</p>
        </div>
        <div className={styles.nftPriceSection}>
          <p>
            Price
            <span>
              {price}
              {cryptoValet}
            </span>
          </p>
          <p>
            Highest Bid
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
