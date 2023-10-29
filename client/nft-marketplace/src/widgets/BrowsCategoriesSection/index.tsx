import CategoryCard from 'shared/ui/CategoryCart'
import styles from './index.module.scss'

const BrowseCategory = () => {
  return (
    <section className={styles.conteiner}>
      <div className={styles.headingWrraper}>
        <h2>Trending Collection</h2>
        <h4>Checkout Our Weekly Updated Trending Collection.</h4>
      </div>
      <div className={styles.colectionSection}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  )
}

export default BrowseCategory
