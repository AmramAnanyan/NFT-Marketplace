import styles from './index.module.scss';
const Success = ({ message }: { message: string }) => {
  return <div className={styles.success}>{message}</div>;
};

export default Success;
