import { IUser } from 'shared/types'
import nftImage from '../../assets/pngIcon/PaintBrush.png'
import styles from './index.module.scss'

interface INftCart {
  id: string
  nftName: string
  nftImage: string
  nftCreatorName: IUser['name']
  nftCreatorImage: IUser['image']
  highestBid: number
  price: number
  cryptoValet: string
}

const nftCartData: INftCart = {
  id: '1',
  nftName: 'Shunik',
  nftImage: nftImage,
  nftCreatorName: 'Valod',
  nftCreatorImage: '',
  highestBid: 0.35,
  price: 1.35,
  cryptoValet: 'ETH'
}
const NftCart = ({
  id,
  nftName,
  nftImage,
  nftCreatorName,
  nftCreatorImage,
  highestBid,
  price,
  cryptoValet
}: INftCart) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.nftImage}
        style={{ backgroundImage: `url(${nftImage})` }}
      ></div>
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
  )
}

export default NftCart
