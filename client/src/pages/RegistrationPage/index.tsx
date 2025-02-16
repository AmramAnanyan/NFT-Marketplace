import { RegistrationForm } from 'features';
import styles from './index.module.scss';
import PageWrapper from 'shared/ui/PageWrapper';
const RegistrationPage = () => {
  return (
    <div className={styles.registerPageContainer}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
