import styles from './index.module.scss';

const ErrorField = ({ message }: { message: string }) => {
  return <p className={styles.error_input}>{message}</p>;
};

export default ErrorField;
