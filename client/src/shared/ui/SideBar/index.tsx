import { useState } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebar_content}>
          <h2>
            <FontAwesomeIcon icon={faGear} color='#a259ff' /> Settings
          </h2>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Contact</a>
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
