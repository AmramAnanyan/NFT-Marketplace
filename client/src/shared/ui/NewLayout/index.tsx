import { FC, PropsWithChildren } from 'react';
import styles from './index.module.scss';

const NewLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.flex_container}>{children}</div>;
};

export default NewLayout;
