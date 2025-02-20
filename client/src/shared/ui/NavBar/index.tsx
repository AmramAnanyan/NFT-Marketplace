import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import userLogo from 'shared/assets/pngIcon/User.png';
import { INavBar } from 'shared/types';
import useWindowSize from 'shared/hooks/useWindowSize';
import { useState } from 'react';
import { useAuth } from 'shared/hooks/useAuth';

const NavBar = ({ brand, navigations }: INavBar) => {
  const { isAuthenticated } = useAuth();
  const { innerWidth } = useWindowSize();
  const [isActive, setIsActive] = useState(false);
  let mobileTab = innerWidth < 450 ? '_mobile' : '';

  const handleBurgerMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={`${styles.conteiner_navbar}`}>
      <div className={styles.logo}>
        <NavLink to={''}>{brand.title}</NavLink>
      </div>
      {mobileTab && (
        <div
          className={`${isActive ? styles.active : styles.icon_one}`}
          onClick={handleBurgerMenuClick}
        >
          <div className={`${styles.hamburger} ${styles.hamburger_one}`}></div>
        </div>
      )}

      <ul
        className={`${styles.navigation_bar} ${
          isActive ? styles.open_bar : ''
        }`}
      >
        {navigations.map(({ id, title, path }) => {
          if (isAuthenticated && path === '/sign-in') {
            return (
              <li key={id}>
                <NavLink to='/profile'>Profile</NavLink>
                {path === '/sign-in' && (
                  <img src={userLogo} alt='' className={styles.userLogo} />
                )}
              </li>
            );
          }
          return (
            <li key={id}>
              <NavLink to={path}>{title}</NavLink>
              {path === '/sign-in' && (
                <img src={userLogo} alt='' className={styles.userLogo} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
