import styles from './index.module.scss';
const Error = ({ message }: { message: string }) => {
  return <div className={styles.error}>{message}</div>;
};

export default Error;
