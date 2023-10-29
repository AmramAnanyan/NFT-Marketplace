import React from 'react'
import UserCart from 'shared/ui/UserCart'
import styles from './index.module.scss'

const TopCreatorsSection = () => {
  return (
    <section className={styles.conteiner}>
      <div className={styles.headingWrraper}>
        <h2>Trending Collection</h2>
        <h4>Checkout Our Weekly Updated Trending Collection.</h4>
      </div>
      <div className={styles.colectionSection}>
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
      </div>
    </section>
  )
}

export default TopCreatorsSection
