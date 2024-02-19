import { isRouteErrorResponse, useRouteError } from 'react-router';
import styles from './index.module.scss';

const Error404Page = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.errorConteiner}>
        <h1>{error.status}</h1>
        <h2>{error.statusText}</h2>
      </div>
    );
  }
  return (
    <div className={styles.errorConteiner}>
      <div>
        <h1>Opss</h1>
      </div>
    </div>
  );
};

export default Error404Page;
