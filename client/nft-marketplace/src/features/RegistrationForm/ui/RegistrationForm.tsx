import React from 'react'
import ButtonUI from 'shared/ui/ButtonUI'
import InputUi from 'shared/ui/InputUI'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {
  const handleChange = () => {}
  return (
    <div className={styles.container}>
      <p>Registration</p>
      <form>
        <InputUi
          type='text'
          id='name'
          onChange={handleChange}
          name='name'
          placeholder='name'
        />
        <InputUi
          type='text'
          id='surname'
          onChange={handleChange}
          name='surname'
          placeholder='surname'
        />
        <InputUi
          type='email'
          id='login_email'
          onChange={handleChange}
          name='email'
          placeholder='Email'
        />
        <InputUi
          type='date'
          id='user_date'
          onChange={handleChange}
          name='userDate'
          placeholder='Date'
        />
        <InputUi
          type='text'
          id='login_password'
          onChange={handleChange}
          name='password'
          placeholder='Password'
        />
        <div className={styles.socialLoginContainer}>sign up with google</div>
        <ButtonUI text='Registration' isLoading={false} type='submit' />
        <Link className={styles.loginLink} to={'/sign-in'}>
          Login
        </Link>
      </form>
    </div>
  )
}

export default RegistrationForm
