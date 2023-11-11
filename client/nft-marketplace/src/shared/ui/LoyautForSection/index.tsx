import React from 'react'
import styles from './index.module.scss'
interface ILoyautForSection {
  title?: string
  description?: string
  children: React.ReactNode
}
const LoyautForSection = ({
  title,
  description,
  children
}: ILoyautForSection) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.headingWrraper}>
        <h2>Trending Collection</h2>
        <h4>Checkout Our Weekly Updated Trending Collection.</h4>
      </div>
      <div className={styles.colectionSection}>{children}</div>
    </div>
  )
}

export default LoyautForSection
