import { LoginForm, RegistrationForm } from 'features'
import React from 'react'
import styles from './index.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
