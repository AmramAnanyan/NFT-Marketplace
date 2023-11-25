import { Link, NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import userLogo from 'shared/assets/pngIcon/User.png'
import { INavBar } from 'shared/types'

const NavBar = ({ brand, navigations }: INavBar) => {
  return (
    <nav className={styles.conteiner_navbar}>
      <div className={styles.logo}>
        <NavLink to={''}>{brand.title}</NavLink>
      </div>
      <ul className={styles.navigation_bar}>
        {navigations.map(({ id, title, path }) => {
          return (
            <li key={id}>
              <NavLink to={path}>{title}</NavLink>
              {path === '/sign-in' && (
                <img src={userLogo} alt='' className={styles.userLogo} />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
