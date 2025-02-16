import { FC, ReactElement, ReactNode } from 'react';
import styles from './index.module.scss';
import { JsxElement } from 'typescript';

const PageWrapper: FC<{ children: ReactElement | ReactNode }> = ({
  children
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
