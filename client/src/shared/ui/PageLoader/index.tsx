import React from 'react';
import styles from './index.module.scss';
const PageLoader = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PageLoader;
