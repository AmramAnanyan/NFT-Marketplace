import { RegistrationForm } from 'features'
import styles from './index.module.scss'
const RegistrationPage = () => {
  return (
    <div className={styles.registerPageContainer}>
      <RegistrationForm />
    </div>
  )
}

export default RegistrationPage
