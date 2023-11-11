import CategoryCard from 'shared/ui/CategoryCart'
import styles from './index.module.scss'
import LoyautForSection from 'shared/ui/LoyautForSection'

const BrowseCategory = () => {
  return (
    <section className={styles.conteiner}>
      <LoyautForSection>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </LoyautForSection>
    </section>
  )
}

export default BrowseCategory
