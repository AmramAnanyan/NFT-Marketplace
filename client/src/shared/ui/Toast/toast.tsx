import { FC, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
interface IToast {
  children: ReactElement | ReactNode;
}

const Toast: FC<IToast> = ({ children }) => {
  return createPortal(
    <div className={styles.toast_wrapper}>
      {children}
      <div className={styles.progress} />
    </div>,
    document.getElementById('portals') as Element
  );
};

export default Toast;
