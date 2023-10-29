import styles from './index.module.scss'
import paintBrush from '../../assets/pngIcon/PaintBrush.png'
interface ICategory {
  id: string
  categoryName: string
  image: string
  iconUrl?: string
}

const categoryDat: ICategory = {
  id: '123',
  categoryName: 'Art',
  image:
    'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-44@2x.png',
  iconUrl: paintBrush
}

const CategoryCard = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.backImage}
        style={{ backgroundImage: `url(${categoryDat.image})` }}
      >
        <span
          className={styles.icon}
          style={{ backgroundImage: `url(${categoryDat.iconUrl})` }}
        ></span>
        <div className={styles.backdropFilter}></div>
      </div>
      <div className={styles.categoryName}>
        <h3>{categoryDat.categoryName}</h3>
      </div>
    </div>
  )
}

export default CategoryCard
