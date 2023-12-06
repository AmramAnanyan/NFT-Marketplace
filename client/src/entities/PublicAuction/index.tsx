import UserCart from 'shared/ui/UserCart'
import styles from './index.module.scss'
import ButtonUI from 'shared/ui/ButtonUI'
import { useEffect, useState } from 'react'
import AuctionTimer from 'shared/ui/AuctionTimer'

const PublicAuction = () => {
  console.log(window.innerWidth, 'inner width')
  return (
    <section className={styles.auctionConteiner}>
      <img
        src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/screen-tablet@1x.png'
        alt='Auction Image'
        width={window.innerWidth}
        height='400'
        className={styles.auctionImage}
      />
      <div className={styles.auctionInfoSection}>
        <div>
          <div className={styles.auctionOwner}>
            <UserCart />
          </div>
          <div>
            <h3 className={styles.auctionTitle}>Mashroom Magic</h3>
          </div>
          <div>
            <ButtonUI isLoading={false} text='See NFT' rightIconSrc='' />
          </div>
        </div>
        <div>
          <AuctionTimer hours={21} minutes={48} seconds={49} />
        </div>
      </div>
    </section>
  )
}

export default PublicAuction
