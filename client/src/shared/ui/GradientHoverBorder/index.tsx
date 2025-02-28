import { FC, PropsWithChildren } from 'react';
import styles from './index.module.scss';
const GradientBorder: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <span className={styles.hover_underline}>{children}</span>;
};

export default GradientBorder;
