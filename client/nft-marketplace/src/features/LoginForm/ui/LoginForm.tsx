import React from 'react'
import ButtonUI from 'shared/ui/ButtonUI'
import InputUi from 'shared/ui/InputUI'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const handleChange = () => {}
  return (
    <div className={styles.container}>
      <p>Login</p>
      <form>
        <InputUi
          type='email'
          id='login_email'
          onChange={handleChange}
          name='email'
          placeholder='Email'
        />
        <InputUi
          type='text'
          id='login_password'
          onChange={handleChange}
          name='password'
          placeholder='Password'
        />
        <div className={styles.socialLoginContainer}>sign in with google</div>
        <ButtonUI text='Sign In' isLoading={false} />
        <Link className={styles.registrationLink} to={'/sign-up'}>
          Registration
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
