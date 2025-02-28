import { useState } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faGear,
  faHome,
  faSignOutAlt,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import GradientBorder from '../GradientHoverBorder';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebar_content}>
          <ul>
            <li>
              <GradientBorder>
                {' '}
                <FontAwesomeIcon icon={faHome} color='#108ee9' size='lg' />{' '}
                <Link to={''}>Dashboard</Link>
              </GradientBorder>
            </li>
            <li>
              <GradientBorder>
                <FontAwesomeIcon icon={faGear} color='#108ee9' size='lg' />
                {'  '}
                <Link to={''}>Settings</Link>
              </GradientBorder>
            </li>
            <li>
              <GradientBorder>
                <FontAwesomeIcon icon={faWallet} color='#108ee9' size='lg' />
                {'  '}
                <Link to={''}>Wallets</Link>
              </GradientBorder>
            </li>
            <li>
              <GradientBorder>
                <FontAwesomeIcon icon={faChartBar} color='#108ee9' size='lg' />
                {'  '}
                <Link to={''}>Analytics</Link>
              </GradientBorder>
            </li>
            <li>
              <GradientBorder>
                <FontAwesomeIcon icon={faSignOutAlt} color='#108ee9' />{' '}
                <Link to={'/sign-in'}>Log Out</Link>
              </GradientBorder>
            </li>
          </ul>
        </div>
        <div className={styles.sidebar_button} onClick={toggleSidebar}>
          <div
            className={`${styles.triangle} ${isSidebarOpen ? styles.open : ''}`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
