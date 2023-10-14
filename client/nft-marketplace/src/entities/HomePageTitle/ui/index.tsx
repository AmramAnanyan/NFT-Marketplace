import ButtonUI from 'shared/ui/ButtonUI'
import RocketLaunch from '../../../shared/assets/pngIcon/RocketLaunchWhit.png'
import styles from './index.module.scss'
const statisticDate = [
  { id: 1, statistic: '240K+', description: 'Total Scale' },
  { id: 2, statistic: '240K+', description: 'Total Scale' },
  { id: 3, statistic: '240K+', description: 'Total Scale' }
]
const HomePageTitle = () => {
  return (
    <div className={styles.container}>
      <h1>Discover Digital Art & Collect Nfts</h1>
      <h5>
        Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell
        Art From More Than 20k Nft Artists.
      </h5>
      <ButtonUI
        isLoading={false}
        text='Get Started'
        leftIconSrc={RocketLaunch}
      />
      <ul>
        {statisticDate.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.statistic}</h2>
              <h4>{item.description}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePageTitle
