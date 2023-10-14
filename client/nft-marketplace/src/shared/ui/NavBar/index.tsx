import styles from './index.module.scss'
import userLogo from 'shared/assets/pngIcon/User.png'
import { INavBar } from 'shared/types'

const NavBar = ({ brand, navigations, userStatus }: INavBar) => {
  return (
    <nav className={styles.conteiner_navbar}>
      <div className={styles.logo}>
        <a href=''>{brand.title}</a>
      </div>
      <ul className={styles.navigation_bar}>
        {navigations.map(({ id, title, path }) => {
          return (
            <li key={id}>
              <a href={path}>{title}</a>
            </li>
          )
        })}
        <li>
          <img src={userLogo} alt='' className={styles.userLogo} />
          <a href='http://'>{userStatus.title}</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
